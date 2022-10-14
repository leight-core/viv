import {
    IBackupMeta,
    IServiceContainer,
    ISource,
    jsonOf,
    templateOf,
    unpack
}                     from "@leight-core/viv";
import {PrismaClient} from "@prisma/client";
import dayjs          from "dayjs";

export interface IRestoreRequest {
    container: IServiceContainer;
    sources: ISource<any, any, any>[];
    archive: string;
    temp?: string;
    prisma: PrismaClient;
    timeout?: number;
}

export class RestoreServiceClass {
    async restore({prisma, archive, sources, temp, container, timeout = 60 * 60 * 1000}: IRestoreRequest) {
        return container.useNodePath(async path => {
            return container.useNodeOs(async os => {
                return container.useNodeFs(async fs => {
                    const $sources: Record<string, ISource<any, any, any>> = sources.reduce((prev, current) => ({...prev, [current.name]: current}), {});
                    const stamp                                            = dayjs().format("YYYY-MM-DD");
                    const restore                                          = path.normalize(`${temp || os.tmpdir()}/restore/${stamp}`);
                    await unpack(archive, restore);
                    const meta = jsonOf<IBackupMeta>("{restore}/meta.json", {restore});
                    await prisma.$transaction(async transaction => {
                        for (const source of sources) {
                            await source.container.withPrisma(transaction).truncate();
                        }
                        for (const name of meta.sources) {
                            const source = $sources[name] || undefined;
                            if (!source) {
                                continue;
                            }
                            const base = templateOf("{restore}/source/{source}", {restore, source: name});
                            for (const file of fs.readdirSync(path.normalize(base))) {
                                await source.restore(jsonOf(`{base}/{file}`, {base, file}));
                            }
                        }
                    }, {
                        timeout,
                    });
                });
            });
        });
    }
}

export const RestoreService = () => new RestoreServiceClass();
