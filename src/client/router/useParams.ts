import {useRouter} from "next/router";

/**
 * Simple wrapper around Next router to extract params from route.
 */
export const useParams = () => {
    return useRouter().query as { [index: string]: string };
};
