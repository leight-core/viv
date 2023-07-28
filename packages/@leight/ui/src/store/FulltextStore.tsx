import {
    createStore,
    type IStoreProps
}                from "@leight/store";
import {type FC} from "react";

export type IFulltextStoreProps = IStoreProps<{
    fulltext: string | null | undefined;

    setFulltext(fulltext?: string | null | undefined): void;
}>

export const FulltextStore = createStore<IFulltextStoreProps>({
    state: () => (set) => ({
        fulltext: undefined,
        setFulltext(fulltext) {
            set({fulltext});
        },
    }),
    name:  "FulltextStoreContext",
});

export interface IFulltextProviderProps {
    defaultFulltext?: string;
}

export const FulltextProvider: FC<IFulltextProviderProps> = (
    {
        defaultFulltext,
        ...props
    }) => {
    return <FulltextStore.Provider
        defaults={{fulltext: defaultFulltext}}
        {...props}
    />;
};
