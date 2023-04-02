import {useTranslation} from "@leight/i18n-client";
import {
    Box,
    Container,
    createStyles,
    Overlay
}                       from "@mantine/core";
import {
    type ComponentProps,
    type FC,
    useState
}                       from "react";
import {useWeeks}       from "../context";
import {Months}         from "./Months";

const useStyles = createStyles(theme => ({
    calendar:      {
        "& .secondary":         {
            color: theme.colors["gray"][5],
        },
        "& .mantine-Grid-root": {
            border:         "1px solid",
            borderColor:    theme.colors["gray"][4],
            borderBottom:   "none",
            borderRight:    "none",
            "&:last-child": {
                border:      "1px solid",
                borderColor: theme.colors["gray"][4],
                borderRight: "none",
            },
        },
        userSelect:             "none",
    },
    controls:      {
        "& > div:last-child": {
            borderRight: "1px solid",
            borderColor: theme.colors["gray"][4],
        },
        "& .middle":          {
            display:        "flex",
            flex:           "1 1 auto",
            justifyContent: "center",
            alignItems:     "center",
            cursor:         "pointer",
            "&:hover":      {
                backgroundColor: theme.colors["gray"][1],
                "& .icon":       {
                    color: theme.colors["gray"][7],
                },
            },
        },
        "& .right":           {
            display:        "flex",
            flex:           "1 1 auto",
            justifyContent: "end",
            alignItems:     "center",
        },
        "& .icon":            {
            color:     theme.colors["gray"][5],
            cursor:    "pointer",
            "&:hover": {
                color: theme.colors["gray"][7],
            },
        },
    },
    controlPrefix: {},
    controlSuffix: {},
    header:        {
        backgroundColor: theme.colors["gray"][2],
        height:          "5em",
        display:         "flex",
        flex:            "1 1 auto",
        justifyContent:  "center",
        alignItems:      "center",
    },
    day:           {
        height:    "8em",
        padding:   "0.4em 0.6em",
        "&:hover": {
            backgroundColor: theme.colors["gray"][2],
        },
    },
    weekRow:       {
        "& > div": {
            borderRight: "1px solid",
            borderColor: theme.colors["gray"][4],
        },
    },
    currentWeek:   {},
    currentDay:    {
        backgroundColor: theme.colors["gray"][4],
    },
    inRange:       {
        fontWeight: "bold",
    },
    outOfRange:    {
        backgroundColor: theme.colors["gray"][1],
        "&:hover":       {
            backgroundColor: theme.colors["gray"][2],
        },
    },
}));

export interface ICalendarProps extends Omit<ComponentProps<typeof Box>, "children"> {
    withControls?: boolean;
    weekCountSize?: number;
    columnSize?: number;
    highlightToday?: boolean;
}

export const Calendar: FC<ICalendarProps> = (
    {
        withControls = true,
        highlightToday = true,
        weekCountSize = 2,
        columnSize = 3,
        ...props
    }) => {
    /**
     * Listening for whole `weeks` changes is OK, because when something inside changes, the whole calendar goes
     * recomputed.
     */
    const {
              nextMonth,
              prevMonth,
              today,
              weeks: {
                         weeks,
                         days,
                         start,
                         end,
                         isCurrent,
                     }
          } = useWeeks();

    const [isSelectMonth, setIsSelectMonth] = useState(false);
    const [withWeeks, setWithWeeks]         = useState(false);
    /**
     * This is specific for Mantine Grid: compute number of columns to render.
     */
    const columnCount                       = (days.length * columnSize) + (withWeeks ? weekCountSize : 0);
    const {t}                               = useTranslation("calendar");
    const {classes}                         = useStyles();

    return <Container
        className={classes.calendar}
    >
        <Box
            pos={"relative"}
            {...props}
        >
            {isSelectMonth && <Overlay
                color={"#FFF"}
                opacity={0.75}
            >
                <Months/>
            </Overlay>}

        </Box>
    </Container>;
};
