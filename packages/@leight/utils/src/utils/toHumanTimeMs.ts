import {type Options} from "humanize-duration";
import {humanizer}    from "./humanizer";

export const toHumanTimeMs = (miliseconds: number | string, options?: Options) => humanizer()(parseFloat(miliseconds as string), options);
