import tar from "tar";

export const pack = (source: string, archive: string, files: string[]) => {
    return tar.c({
        gzip:     {
            level: 9,
        },
        file:     archive,
        portable: true,
        cwd:      source,
    }, files);
};
