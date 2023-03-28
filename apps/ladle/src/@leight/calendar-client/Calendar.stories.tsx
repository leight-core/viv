import {type StoryDefault} from "@ladle/react";
import {Calendar}          from "@leight/calendar-client";

export default {
    title: "leight / calendar client",
} satisfies StoryDefault;

export const CalendarStories = () => {
    return <Calendar/>;
};

CalendarStories.storyName = "Calendar";
