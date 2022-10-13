import fileSize from "filesize";

export const toHumanBytes = (size: number) => fileSize(size);
