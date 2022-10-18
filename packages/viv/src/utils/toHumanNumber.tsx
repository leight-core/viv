export function toHumanNumber(number?: number | null, empty = "-", max = 2): string {
    if (number === null || number === undefined) {
        return empty;
    }
    try {
        return number.toLocaleString(undefined, {
            maximumSignificantDigits: max,
        });
    } catch (e) {
        console.error("toHumanNumber", number, e);
        return number.toFixed(2);
    }
}
