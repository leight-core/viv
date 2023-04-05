import {DateTime} from "@leight/i18n";
import {z}        from "@leight/zod";

/**
 * Defines an individual calendar item being rendered/handled in a particular day.
 */
export const CalendarEventSchema = z.object({
    date: z.string().transform(input => DateTime.fromISO(input)),
    data: z.record(z.any()).optional(),
});
export type ICalendarEventSchema = typeof CalendarEventSchema;
export type ICalendarEvent = z.infer<ICalendarEventSchema>;

/**
 * Overall calendar data (could be returned from an API or whatever).
 */
export const CalendarItemsSchema = z.object({
    /**
     * Single events
     */
    events: CalendarEventSchema.array(),
});
export type ICalendarItemsSchema = typeof CalendarItemsSchema;
export type ICalendarItems = z.infer<ICalendarItemsSchema>;

export * from "./months";
export * from "./weeks";
export * from "./years";
