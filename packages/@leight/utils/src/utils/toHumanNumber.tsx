export interface IToHumanNumberProps {
    number?: number | null;
    empty?: string;
    max?: number;
}

export function toHumanNumber({number, empty = '-', max = 2}: IToHumanNumberProps): string {
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
