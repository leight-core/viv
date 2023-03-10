import {
    $FileServiceConfig,
    $FileSource,
    type IFile,
    type IFileService,
    type IFileServiceConfig,
    type IFileServiceStoreProps,
    type IFileSource,
}                       from "@leight/file";
import {copySync}       from "fs-extra";
import {detectFileMime} from "mime-detect";
import fs               from "node:fs";
import coolPath         from "node:path";
import "reflect-metadata";
import touch            from "touch";
import {
    inject,
    injectable
}                       from "tsyringe";
import {v4}             from "uuid";

@injectable()
export class FileService implements IFileService {
    constructor(
        @inject($FileServiceConfig)
        private fileServiceConfig: IFileServiceConfig,
        @inject($FileSource)
        private fileSource: IFileSource,
    ) {
    }

    public pathOf(fileId: string): string {
        return this.fileServiceConfig.path.replace(
            "{fileId}",
            fileId.split("-").join("/")
        );
    }

    public fetch(fileId: string): Promise<IFile> {
        return this.prismaClient.file.findUniqueOrThrow({where: {id: fileId}});
    }

    public async store(
        {
            name,
            path,
            file,
            userId,
            mime,
            replace = false,
        }: IFileServiceStoreProps): Promise<IFile> {
        const id       = v4();
        const location = this.pathOf(id);
        fs.mkdirSync(coolPath.dirname(location), {recursive: true});
        file
            ? copySync(file, location, {overwrite: replace})
            : touch.sync(location);
        const data = {
            id,
            location,
            name,
            path,
            mime:    mime || (await this.mimeOf(location)),
            size:    this.sizeOf(location),
            created: new Date().toISOString(),
            ttl:     undefined,
            userId,
        };

        return replace && userId
            ? this.prismaClient.file.upsert({
                where: {
                    userId_path_name: {
                        name,
                        path,
                        userId,
                    },
                },
                create: data,
                update: data,
            })
            : this.prismaClient.file.create({
                data,
            });
    }

    protected async mimeOf(file?: string): Promise<string> {
        if (!file) {
            return "application/octet-stream";
        }
        try {
            return await detectFileMime(file);
        } catch (e) {
            return (
                this.fileServiceConfig.defaultMimeType ||
                "application/octet-stream"
            );
        }
    }

    protected sizeOf(file?: string): number {
        if (!file) {
            return 0;
        }
        return fs.statSync(file).size;
    }
}
