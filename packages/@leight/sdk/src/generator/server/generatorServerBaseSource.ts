import {withSourceFile}              from "@leight/generator-server";
import {normalize}                   from "node:path";
import {type IGenerator}             from "../../api";
import {type IGeneratorServerParams} from "./generatorServer";

export const generatorServerBaseSource: IGenerator<IGeneratorServerParams> = async (
    {
        barrel,
        folder,
        params: {
                    packages,
                    entity,
                    prisma,
                    header,
                },
    }) => {
    withSourceFile()
        .withHeader(header || `
    Base Source contains default implementation of Source for entity ${entity}. This could be used for further extensions,
    also default export uses this as a parent class.
        `)
        .withImports({
            imports: {
                "@leight/query":         [
                    "withCursor",
                ],
                "@leight/prisma":        [
                    "$PrismaClient",
                ],
                "@leight/source":        [
                    "type ISource",
                    "withUpsert",
                ],
                "@leight/source-server": [
                    "AbstractSource",
                ],
            },
        })
        .withImports({
            imports: {
                [packages.schema]: [
                    `$${entity}Source`,
                    `type I${entity}SourceSchema`,
                ],
            },
        })
        .withImports({
            imports: {
                [packages.prisma]: [
                    "type PrismaClient",
                ],
            }
        })
        .withTypes({
            types: {
                "IEntity": `I${entity}SourceSchema["Entity"]`,
                "IQuery":  `I${entity}SourceSchema["Query"]`,
            },
        })
        .withClasses({
            exports: {
                [`${entity}BaseSource`]: {
                    extends: `AbstractSource<I${entity}SourceSchema>`,
                    body:    `
    static inject = [
        $PrismaClient,
    ];

    constructor(
        protected prismaClient: PrismaClient,
    ) {
        super($${entity}Source);
    }

    async runUpsert(props: ISource.IUpsert<I${entity}SourceSchema>): Promise<IEntity> {
        return this.prisma().upsert(withUpsert(props));
    }

    async runCount(query?: IQuery): Promise<number> {
        return this.prisma().count({
            where: query?.filter,
        });
    }

    async runQuery(query?: IQuery): Promise<IEntity[]> {
        return this.prisma().findMany(withCursor({
            query,
            arg: {
                where:   query?.filter,
                orderBy: query?.sort,
            }
        }));
    }
    
    prisma() {
        return this.prismaClient.${prisma};
    }
                    `,
                },
            },
        })
        .saveTo({
            file: normalize(`${process.cwd()}/${folder}/ServerBaseSource.ts`),
            barrel,
        });
};
