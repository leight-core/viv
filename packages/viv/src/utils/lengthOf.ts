export const lengthOf = async (iterable: Iterable<any> | AsyncIterable<any>): Promise<number> => {
    let count = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for await (const $ of iterable) {
        count++;
    }
    return count;
};
