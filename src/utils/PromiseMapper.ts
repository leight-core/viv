import {IPromiseMapper} from "@leight/viv";

export function PromiseMapper<TSource, TTarget>(map: (source: TSource) => Promise<TTarget>): IPromiseMapper<TSource, TTarget> {
    return {
        map,
        mapNull: async source => source ? map(source) : undefined,
        list:    async source => (await Promise.all((await source).filter(i => i).map(map))),
    };
}
