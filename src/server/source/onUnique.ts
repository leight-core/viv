export const onUnique = async <T>(create: () => Promise<T>, callback: (e: Error) => Promise<T>): Promise<T> => {
    try {
        return await create();
    } catch (e) {
        if (e instanceof Error) {
            if (e.message.includes("Unique constraint failed")) {
                return callback(e);
            }
        }
        throw e;
    }
};
