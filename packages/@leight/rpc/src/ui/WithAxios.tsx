"use client";

import {type FC}  from "react";
import {useAxios} from "../hook/useAxios";

/**
 * Dummy component just calling axios setup hook (enabled on client-side).
 */
export const WithAxios: FC = () => {
    useAxios();
    return null;
};
