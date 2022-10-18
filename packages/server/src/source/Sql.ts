import {PrismaClient} from "@prisma/client";

export class Sql {
    static parse(source: string): string[] {
        return source
            .replace(/(--)(.*)/g, "")
            .replace(/\r?\n|\r/g, " ")
            .replace(/\/\*.*\*\//g, " ")
            .replace(/\s\s+/g, " ")
            .split(";")
            .map(query => query.trim())
            .filter(query => query.length);
    }

    static async read(file: string): Promise<string[]> {
        return this.parse((await import("node:fs")).readFileSync(file).toString());
    }

    static async file<T>(file: string, executor: (query: string) => Promise<T>): Promise<T[]> {
        const queries      = await this.read(file);
        const results: T[] = [];
        for (const query of queries) {
            results.push(await executor(query));
        }
        return results;
    }

    static async source<T>(source: string, executor: (query: string) => Promise<T>): Promise<T[]> {
        const queries      = this.parse(source);
        const results: T[] = [];
        for (const query of queries) {
            results.push(await executor(query));
        }
        return results;
    }

    static async run(file: string, prisma: PrismaClient, timeout: number = 1000 * 60) {
        return prisma.$transaction(async prisma => this.file(file, sql => {
            console.log(`Executing: ${sql}`);
            return prisma.$executeRawUnsafe(sql);
        }), {
            timeout,
        });
    }

    static async execute(source: string, prisma: PrismaClient, timeout: number = 1000 * 60) {
        return prisma.$transaction(async prisma => this.source(source, sql => {
            console.log(`Executing: ${sql}`);
            return prisma.$executeRawUnsafe(sql);
        }), {
            timeout,
        });
    }
}
