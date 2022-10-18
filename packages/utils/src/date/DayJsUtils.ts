import dayjs, {ConfigType} from "dayjs";
import {
    Duration,
    DurationUnitType
}                          from "dayjs/plugin/duration";

export class DayJsUtils {
    static toLocalDate(input?: ConfigType | null, fallback = "-"): string {
        return input ? dayjs(input).format("L") : fallback;
    }

    static toLocalDateTime(input?: ConfigType | null, fallback = "-"): string {
        return input ? dayjs(input).format("L LTS") : fallback;
    }

    static toUtc(input ?: ConfigType | null, fallback?: string): string | undefined {
        try {
            return input ? (dayjs(input) as any).utc().format() : fallback;
        } catch (e) {
            console.error("Dayjs does not have registered utc() plugin!", "https://day.org/docs/en/plugin/utc", e);
            return fallback;
        }
    }

    static durationOf(date: ConfigType, from?: ConfigType, unit?: DurationUnitType): Duration {
        return dayjs.duration(dayjs(from).diff(date), unit);
    }

    static wrap(input?: ConfigType | null, fallback: ConfigType | null = null) {
        return input ? dayjs(input) : (fallback ? dayjs(fallback) : null);
    }
}
