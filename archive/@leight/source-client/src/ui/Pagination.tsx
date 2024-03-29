import {type ISource}                 from "@leight/source";
import {Pagination as CoolPagination} from "@mantine/core";
import {
    type ComponentProps,
    type FC
}                                     from "react";

export interface IPaginationProps extends Partial<ComponentProps<typeof CoolPagination>> {
    Source: ISource<any>;
    hideOnSingle?: boolean;
}

export const Pagination: FC<IPaginationProps> = (
    {
        Source,
        hideOnSingle = true,
        ...props
    }) => {
    const $cacheTime = 120;
    const {
        filter,
        size,
        page,
        withPage
    } = Source.query.use((
        {
            filter,
            size,
            page,
            withPage
        }) => ({
        filter,
        size,
        page,
        withPage
    }));
    const result = Source.repository.useCount(filter, {
        cacheTime: $cacheTime * 1000,
        staleTime: $cacheTime * 1000,
    });
    const pages = Math.ceil((result.data || 0) / size);
    return hideOnSingle && pages === 1 ? null : <CoolPagination
        withEdges
        size={"md"}
        radius={"sm"}
        total={pages}
        boundaries={2}
        siblings={2}
        value={page + 1}
        onChange={page => withPage(page - 1)}
        {...props}
    />;
};
