export const templateOf = (template: string, params: Record<string, string>): string => template.replace(/{([^{}]+)}/g, (_, key) => params[key] || (() => {
    throw new Error(`Missing template parameter ${key}.`);
})());
