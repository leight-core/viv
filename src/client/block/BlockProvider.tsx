import {
    BlockContext,
    IBlockContext,
    isCallable
} from "@leight-core/viv";
import {
    FC,
    ReactNode,
    useRef,
    useState
} from "react";

export interface IBlockProviderProps {
    /**
     * Default blocking state; "false" if not specified.
     */
    defaultBlock?: boolean;
    children?: ReactNode | ((blockContext: IBlockContext) => ReactNode);
}

export const BlockProvider: FC<IBlockProviderProps> = ({defaultBlock = false, children}) => {
    const [block, setBlock] = useState(defaultBlock);
    const context           = useRef<IBlockContext>({
        isBlocked: () => block,
        block:     (block = true) => setBlock(block),
        unblock:   () => setBlock(false),
    });

    return <BlockContext.Provider
        value={context.current}
    >
        {isCallable(children) ? <BlockContext.Consumer>{children as any}</BlockContext.Consumer> : children as ReactNode}
    </BlockContext.Provider>;
};
