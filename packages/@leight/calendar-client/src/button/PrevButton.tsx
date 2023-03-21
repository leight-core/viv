import {Button}                from "@mantine/core";
import {
    type ComponentProps,
    type FC
}                              from "react";
import {useCalendarStoreState} from "../context";

export interface IPrevButtonProps extends ComponentProps<typeof Button> {

}

export const PrevButton: FC<IPrevButtonProps> = () => {
    const aaa = useCalendarStoreState();
    return <Button>
        Prev
    </Button>;
};
