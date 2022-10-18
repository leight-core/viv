import {templateOf} from "@leight/utils";

export const jsonOf = async <T>(file: string, params: Record<string, string> = {}): Promise<T> => {
    const fs   = await import("node:fs");
    const path = await import("node:path");
    return JSON.parse(fs.readFileSync(path.normalize(templateOf(file, params)), "utf8")) as T;
};
