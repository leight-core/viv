export const unpack = async (archive: string, target: string) => {
    const fs  = await import("node:fs");
    const tar = await import("tar");
    fs.mkdirSync(target, {recursive: true});
    return tar.x({
        file: archive,
        cwd:  target,
    });
};
