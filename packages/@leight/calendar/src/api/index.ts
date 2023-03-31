import {DateTime} from "@leight/i18n";
import {z}        from "zod";

export const CalendarItemSchema = z.object({
    date: z.string().transform(input => DateTime.fromISO(input)),
});
export type ICalendarItemSchema = typeof CalendarItemSchema;
export type ICalendarItem = z.infer<ICalendarItemSchema>;
