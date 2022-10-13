import cleaner, {ICleanerOptions} from "fast-clean";

/**
 * Takes an object and remove all **undefined** properties, preserving nulls.
 */
export const cleanOf = (obj: any, options?: ICleanerOptions) => cleaner.clean(obj || {}, {
    nullCleaner: false,
    ...options,
});
