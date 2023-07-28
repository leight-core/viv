import createEmotionCache from "@emotion/cache";

export const withEmotionCache = () => {
    const cache = createEmotionCache({
        key:           "emotion-cache",
        prepend:       true,
        stylisPlugins: [],
    });
    cache.compat = true;
    return cache;
};
