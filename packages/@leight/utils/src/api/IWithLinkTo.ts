import {type IHrefProps} from "./IHrefProps";
import {type IHrefQuery} from "./IHrefQuery";

export type IWithLinkTo<THrefQuery extends IHrefQuery = any> = (href: IHrefProps<THrefQuery> | string) => string;
