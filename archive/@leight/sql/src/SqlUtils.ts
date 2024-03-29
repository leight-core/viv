import {
    $PrismaClient,
    type PrismaClient
} from "@leight/prisma";

export class SqlUtils {
    static inject = [
        $PrismaClient,
    ];

    constructor(
        protected prismaClient: PrismaClient,
    ) {
    }

    parse(source: string): string[] {
        return source
            .replace(/(--)(.*)/g, "")
            .replace(/\r?\n|\r/g, " ")
            .replace(/\/\*.*\*\//g, " ")
            .replace(/\s\s+/g, " ")
            .split(";")
            .map((query) => query.trim())
            .filter((query) => query.length);
    }

    async read(file: string): Promise<string[]> {
        return this.parse(
            (await import("node:fs")).readFileSync(file).toString()
        );
    }

    async file<T>(
        file: string,
        executor: (query: string) => Promise<T>
    ): Promise<T[]> {
        const queries      = await this.read(file);
        const results: T[] = [];
        for (const query of queries) {
            results.push(await executor(query));
        }
        return results;
    }

    async source<T>(
        source: string,
        executor: (query: string) => Promise<T>
    ): Promise<T[]> {
        const queries      = this.parse(source);
        const results: T[] = [];
        for (const query of queries) {
            results.push(await executor(query));
        }
        return results;
    }

    async run(file: string, timeout: number = 1000 * 60) {
        return this.prismaClient.$transaction(
            async (prisma) =>
                this.file(file, (sql) => {
                    console.log(`Executing: ${sql}`);
                    return prisma.$executeRawUnsafe(sql);
                }),
            {
                timeout,
            }
        );
    }

    async execute(source: string, timeout: number = 1000 * 60) {
        return this.prismaClient.$transaction(
            async (prisma) =>
                this.source(source, (sql) => {
                    console.log(`Executing: ${sql}`);
                    return prisma.$executeRawUnsafe(sql);
                }),
            {
                timeout,
            }
        );
    }
}
