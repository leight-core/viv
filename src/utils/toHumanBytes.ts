import {filesize} from "filesize";

/**
 * @TODO Move this to FileService
 * @param size
 */
export const toHumanBytes = (size: number) => filesize(size) as string;
