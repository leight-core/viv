import humanizeDuration, {
    HumanizerOptions,
    Options
}              from "humanize-duration";
import i18next from "i18next";

const humanizer = (options?: HumanizerOptions) => humanizeDuration.humanizer({
    language:         i18next.language,
    fallbacks:        ["en"],
    largest:          3,
    round:            true,
    maxDecimalPoints: 2,
    ...options,
});

export const toHumanTimeMs = (miliseconds: number | string, options?: Options) => humanizer()(parseFloat(miliseconds as string), options);

export const toHumanTimeSec = (secs: number | string, options?: Options) => toHumanTimeMs(parseFloat(secs as string) * 1000, options);
