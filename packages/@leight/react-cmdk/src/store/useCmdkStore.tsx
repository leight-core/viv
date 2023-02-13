import {createStoreContext} from "@leight/context-client";

export interface ICmdkStoreProps {
    readonly page?: string;
    readonly isOpen: boolean;
    readonly search: string;

    setPage(page?: string): void;

    setIsOpen(isOpen: boolean): void;

    setSearch(search: string): void;
}

export const {
                 Provider:         CmdkProvider,
                 useStore:         useCmdkStore,
                 useOptionalStore: useOptionalCmdkStore,
             } = createStoreContext<ICmdkStoreProps>(
    (set) => ({
        isOpen: false,
        search: "",
        setIsOpen(isOpen) {
            set({isOpen});
        },
        setPage(page) {
            set({page});
        },
        setSearch(search) {
            set({search});
        },
    }),
    "CmdkContext",
    "Add CmdkProvider."
);
