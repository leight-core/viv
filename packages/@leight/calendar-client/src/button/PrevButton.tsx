import {Button}           from "@mantine/core";
import {
    type ComponentProps,
    type FC
}                         from "react";
import {useCalendarState} from "../context";

export interface IPrevButtonProps extends ComponentProps<typeof Button> {

}

export const PrevButton: FC<IPrevButtonProps> = () => {
    const aaa = useCalendarState();
    return <Button>
        Prev
    </Button>;
};
