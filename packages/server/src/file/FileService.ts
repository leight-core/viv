import {
    IFileService,
    IFileServiceFactory
}                 from "@leight/server";
import {IFile}    from "@leight/shared";
import {copySync} from "fs-extra";
import mime       from "mime-types";
import fs         from "node:fs";
import path       from "node:path";
import touch      from "touch";
import {v4}       from "uuid";

export const FileService: IFileServiceFactory = ({config = {path: ".data/file/{fileId}"}}) => {
    const service: IFileService = {
        mimeOf:     file => file ? (mime.lookup(file) || config?.defaultMimeType || "application/octet-stream") : "application/octet-stream",
        sizeOf:     file => file ? fs.statSync(file).size : 0,
        infoOf:     file => {
            const $file = path.parse(file);
            return {
                name:     $file.name,
                path:     $file.dir,
                location: file,
                mime:     service.mimeOf(file),
                size:     service.sizeOf(file),
            };
        },
        toLocation: fileId => config.path.replace("{fileId}", fileId.split("-").join("/")),
        store:      store => {
            const id          = v4();
            const location    = service.toLocation(id);
            const file: IFile = {
                id,
                location,
                name:    store.name,
                path:    store.path,
                mime:    service.mimeOf(store.file),
                size:    service.sizeOf(store.file),
                created: (new Date()).toISOString(),
                ttl:     undefined,
            };
            fs.mkdirSync(path.dirname(location), {recursive: true});
            store.file ? copySync(store.file, location, {overwrite: store.replace}) : touch.sync(location);
            return file;
        }
    };

    return service;
};
