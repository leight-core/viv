import {templateOf} from "@leight-core/utils";
import fs           from "node:fs";
import path         from "node:path";

export const jsonOf = <T>(file: string, params: Record<string, string> = {}): T => {
	return JSON.parse(fs.readFileSync(path.normalize(templateOf(file, params)), "utf8")) as T;
};
