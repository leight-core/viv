import dayjs, {ConfigType} from "dayjs";
import {
	Duration,
	DurationUnitType
}                          from "dayjs/plugin/duration";
import moment, {
	Moment,
	MomentInput
}                          from "moment";

export const toLocalDate = (input?: ConfigType | null, fallback = "-"): string => {
	return input ? dayjs(input).format("L") : fallback;
};

export const toLocalDateTime = (input?: ConfigType | null, fallback = "-"): string => {
	return input ? dayjs(input).format("L LTS") : fallback;
};

export const toUtcDateTime = (input ?: ConfigType | null, fallback: string | null = null): string | null => {
	try {
		return input ? (dayjs(input) as any).utc().format() : fallback;
	} catch (e) {
		console.error("Dayjs does not have registered utc() plugin!", "https://day.org/docs/en/plugin/utc", e);
		return fallback;
	}
};

export const asDayjs = (input?: ConfigType | null, fallback: ConfigType | null = null) => {
	return input ? dayjs(input) : (fallback ? dayjs(fallback) : null);
};

export const asMoment = (input?: MomentInput, fallback: MomentInput | null = null): Moment | null => {
	return input ? moment(input) : (fallback ? moment(fallback) : null);
};

export const durationOf = (date: ConfigType, from?: ConfigType, unit?: DurationUnitType): Duration => {
	return dayjs.duration(dayjs(from).diff(date), unit);
};
