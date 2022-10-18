import {IWithIdentity} from "@leight/shared";

/**
 * Basic entity to work with (used in various variants like creation, backup and whatever is needed).
 */
export type IEntity =
    Record<string, any>
    & IWithIdentity;
