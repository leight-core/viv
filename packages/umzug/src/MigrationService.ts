import {sha256}       from "@leight/core";
import {SqlUtils}     from "@leight/sql";
import {PrismaClient} from "@prisma/client";
import chalk          from "chalk";
import clear          from "clear";
import figlet         from "figlet";
import fs             from "node:fs";
import path           from "node:path";
import {
    inject,
    injectable
}                     from "tsyringe";
import {Umzug}        from "umzug";
import {v4}           from "uuid";

const EMPTY_MIGRATION = "__empty__";

@injectable()
export class MigrationService {
    constructor(protected sqlUtils: SqlUtils, @inject("PrismaClient") protected prisma: PrismaClient) {
    }

    async ensureMigrationTable() {
        try {
            await this.sqlUtils.execute(`
                create table _prisma_migrations
                (
                    id                  varchar(36)                            not null primary key,
                    checksum            varchar(64)                            not null,
                    finished_at         timestamp with time zone,
                    migration_name      varchar(255)                           not null,
                    logs                text,
                    rolled_back_at      timestamp with time zone,
                    started_at          timestamp with time zone default now() not null,
                    applied_steps_count integer                  default 0     not null
                );
                alter table _prisma_migrations owner to "monye.one";
            `);
        } catch (e) {
            // nope
        }
    }

    umzug(): Umzug {
        return new Umzug({
            migrations: {
                glob:    "prisma/migrations/**/*.{ts,sql}",
                resolve: params => {
                    const name = path.normalize(params.path!.replace(process.cwd(), ""))
                        .replaceAll("\\", "/")
                        .replaceAll("prisma/migrations", "")
                        .replaceAll(/migration.(ts|sql)/g, "")
                        .replaceAll("/", "");
                    if (fs.readFileSync(params.path!).length === 0) {
                        return {
                            name: EMPTY_MIGRATION,
                            up:   async () => {
                                // nope
                            },
                        };
                    }
                    if (params.path?.endsWith(".sql")) {
                        return {
                            name,
                            up: async () => this.sqlUtils.run(params.path as string),
                        };
                    }
                    const defaults = Umzug.defaultResolver(params);
                    return {
                        ...defaults,
                        name,
                    };
                },
            },
            storage:    {
                logMigration:   async params => {
                    if (params.name === EMPTY_MIGRATION) {
                        return;
                    }
                    await this.ensureMigrationTable();
                    const hash = await sha256(fs.readFileSync(params.path!).toString());
                    await this.prisma.$executeRaw`INSERT INTO _prisma_migrations VALUES (${v4()}, ${hash}, NOW(), ${params.name}, NULL, NULL, now(), 1)`;
                },
                unlogMigration: async () => {
                    // nope
                },
                executed:       async () => {
                    await this.ensureMigrationTable();
                    return (await this.prisma.$queryRaw<{ migration_name: string }[]>`SELECT migration_name FROM _prisma_migrations ORDER BY migration_name ASC`).map(({migration_name}: { migration_name: string }) => migration_name);
                },
            },
            logger:     undefined,
        });
    }

    migrate() {
        clear();
        console.log(
            chalk.yellowBright(
                figlet.textSync("Leight - Umzug", {horizontalLayout: "full"})
            )
        );
        console.log("Searching in", "prisma/migrations/**/*.{ts,sql}");
        this.umzug().up()
            .then(() => {
                console.log(
                    chalk.greenBright(
                        figlet.textSync("Done", {horizontalLayout: "full"})
                    )
                );
                process.exit(0);
            })
            .catch(e => {
                console.log(
                    chalk.redBright(
                        figlet.textSync("Kaboom!", {horizontalLayout: "full"})
                    )
                );
                console.error(e);
                process.exit(1);
            });
    }
}
