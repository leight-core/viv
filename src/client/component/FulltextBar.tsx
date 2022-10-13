import {
    IWithFulltext,
    useFilterContext,
    useOptionalCursorContext,
    useSourceContext
}                  from "@leight-core/viv";
import {SearchBar} from "antd-mobile";
import {
    ComponentProps,
    FC,
    useEffect,
    useState
}                  from "react";

export interface IFulltextBarProps extends Partial<ComponentProps<typeof SearchBar>> {
}

export const FulltextBar: FC<IFulltextBarProps> = props => {
    const filterContext     = useFilterContext<IWithFulltext>();
    const {fulltext}        = filterContext.filter || {fulltext: ""};
    const sourceContext     = useSourceContext();
    const cursorContext     = useOptionalCursorContext();
    const [value, setValue] = useState(fulltext);
    useEffect(() => {
        setValue(fulltext);
    }, [fulltext]);
    return <SearchBar
        value={value}
        onChange={setValue}
        onSearch={value => {
            sourceContext.reset();
            filterContext.setFilter({fulltext: value});
            setTimeout(() => cursorContext?.setPage(0), 0);
        }}
        onClear={() => {
            sourceContext.reset();
            filterContext.setFilter();
            setTimeout(() => cursorContext?.setPage(0), 0);
        }}
        {...props}
    />;
};
