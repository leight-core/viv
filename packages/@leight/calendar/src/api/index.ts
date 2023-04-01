import {DateTime} from "@leight/i18n";
import {z}        from "zod";

/**
 * Defines an individual calendar item being rendered/handled in a particular day.
 */
export const CalendarItemSchema = z.object({
    date: z.string().transform(input => DateTime.fromISO(input)),
});
export type ICalendarItemSchema = typeof CalendarItemSchema;
export type ICalendarItem = z.infer<ICalendarItemSchema>;

/**
 * Overall calendar data (could be returned from an API or whatever).
 */
export const CalendarDataSchema = z.object({
    items:            CalendarItemSchema.array(),
    withPastEvents:   z.boolean(),
    withFutureEvents: z.boolean(),
});
export type ICalendarDataSchema = typeof CalendarDataSchema;
export type ICalendarData = z.infer<ICalendarDataSchema>;
