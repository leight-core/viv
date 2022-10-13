import {
    IBackupService,
    IContainer,
    IJobProgress,
    IServiceContainer,
    ISource
}               from "@leight-core/viv";
import dayjs    from "dayjs";
import fs       from "node:fs";
import os       from "node:os";
import path     from "node:path";
import tar      from "tar";
import {Logger} from "winston";

export type IArchiveCallback = (backup: string, file: string) => Promise<any>

export interface IBackupServiceDeps<TContainer extends IContainer> {
    version: string;
    sources: ISource<any, any, any>[];
    container: TContainer;
    jobProgress: IJobProgress;
    logger: Logger;

    temp?: string;

    /**
     * Custom implementation of archive (should create one file).
     * @param backup
     * @param file
     */
    archive?: IArchiveCallback;
}

export interface IBackupMeta {
    version: string;
    sources: string[];
}

export const BackupService = <TContainer extends IServiceContainer>(deps: IBackupServiceDeps<TContainer>) => new BackupServiceClass(deps);

export class BackupServiceClass<TContainer extends IServiceContainer> implements IBackupService {
    readonly version: string;
    readonly sources: ISource<any, any, any>[];
    readonly temp: string;
    readonly container: TContainer;
    readonly logger: Logger;
    readonly jobProgress: IJobProgress;
    readonly archive?: IArchiveCallback;

    constructor({version, sources, container, logger, jobProgress, temp, archive}: IBackupServiceDeps<TContainer>) {
        this.version     = version;
        this.sources     = sources;
        this.temp        = temp || os.tmpdir();
        this.container   = container;
        this.logger      = logger;
        this.jobProgress = jobProgress;
        this.archive     = archive;
    }

    async backup(): Promise<void> {
        return this.container.useFileSource(async fileSource => {
            const stamp  = dayjs().format("YYYY-MM-DD");
            const backup = path.normalize(`${this.temp}/backup/${stamp}`);
            fs.mkdirSync(backup, {recursive: true});
            const file = await fileSource.store({
                path:    "/backup",
                name:    `Backup-${stamp}.tgz`,
                replace: true,
            });

            fs.writeFileSync(path.normalize(`${backup}/meta.json`), JSON.stringify({
                version: this.version,
                sources: this.sources.map(source => source.name),
            } as IBackupMeta));

            await this.jobProgress.setTotal(1);
            let count = 0;
            for (const source of this.sources) {
                count += await source.count({});
            }
            await this.jobProgress.setTotal(count + 1);
            await this.jobProgress.onSuccess();

            await Promise.all(this.sources.map(async source => {
                try {
                    await this.export(backup, source);
                } catch (e) {
                    console.error(e);
                    this.logger.error(e);
                }
            }));

            await (this.archive ? this.archive(backup, file.location) : tar.c({
                gzip:     {
                    level: 9,
                },
                file:     file.location,
                portable: true,
                cwd:      backup,
            }, [
                "meta.json",
                "source"
            ]));

            fs.rmSync(backup, {recursive: true, force: true});
            await fileSource.refresh(file.id);
            this.logger.debug(`Finished backup of ${file.location}.`);
        });
    }

    async export(backup: string, source: ISource<any, any, any>) {
        const $path = path.normalize(`${backup}/source/${source.name}`);
        fs.mkdirSync($path, {recursive: true});
        const size  = 250;
        const pages = Math.ceil(await source.count({}) / size);
        for (let page = 0; page <= pages; page++) {
            for (const entity of await source.query({page, size})) {
                try {
                    fs.writeFileSync(path.normalize(`${$path}/${entity.id}.json`), JSON.stringify(await source.backup(entity)));
                    await this.jobProgress.onSuccess();
                } catch (e) {
                    await this.jobProgress.onFailure();
                    console.error(e);
                    this.logger.error(e);
                }
            }
        }
    }
}
