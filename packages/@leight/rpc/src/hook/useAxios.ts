"use client";

import axios       from "axios";
import {useEffect} from "react";

/**
 * Bootstrap axios (if used in the app)
 */
export const useAxios = () => {
    useEffect(() => {
        axios.defaults.timeout = 1000 * 60;
        axios.defaults.baseURL = process.env.NEXT_PUBLIC_RPC;
    }, []);
};
