import {
    getTokenUser,
    ISource,
}                           from "@leight/viv";
import {GetServerSideProps} from "next";

export const withFetch = <TKey extends string, TSource extends ISource<any, any, any, any>>(source: () => Promise<TSource>, key: TKey, query: string): GetServerSideProps => async context => {
    const $source = await source();
    $source.container.withUser(await getTokenUser(context));
    if (!context.params?.[query]) {
        return {
            notFound: true,
        };
    }
    try {
        const item = await $source.get(context.params[query] as string);
        if (!item) {
            return {
                notFound: true,
            };
        }
        return {
            props: {
                [key]: await $source.mapper.toItem.map(item),
            }
        };
    } catch (e) {
        console.error(e);
        return {
            notFound: true,
        };
    }
};
