import {ISource}      from "@leight-core/api";
import {
	IBackupMeta,
	jsonOf,
	unpack
}                     from "@leight-core/server";
import {templateOf}   from "@leight-core/utils";
import {PrismaClient} from "@prisma/client";
import dayjs          from "dayjs";
import fs             from "node:fs";
import os             from "node:os";
import path           from "node:path";

export const RestoreService = () => new RestoreServiceClass();

export interface IRestoreRequest {
	sources: ISource<any, any, any>[];
	archive: string;
	temp?: string;
	prisma: PrismaClient;
	timeout?: number;
}

export class RestoreServiceClass {
	async restore({prisma, archive, sources, temp = os.tmpdir(), timeout = 60 * 60 * 1000}: IRestoreRequest) {
		const $sources: Record<string, ISource<any, any, any>> = sources.reduce((prev, current) => ({...prev, [current.name]: current}), {});
		const stamp                                            = dayjs().format("YYYY-MM-DD");
		const restore                                          = path.normalize(`${temp}/restore/${stamp}`);
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
	}
}
