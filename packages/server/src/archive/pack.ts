export const pack = async (source: string, archive: string, files: string[]) => {
    const tar = await import("tar");
    return tar.c({
        gzip:     {
            level: 9,
        },
        file:     archive,
        portable: true,
        cwd:      source,
    }, files);
};
