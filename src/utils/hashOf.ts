export const hashOf = async (input: string): Promise<string> => {
    return (await import("node:crypto")).createHash("sha256").update(input).digest("hex");
};
