import {type IHrefProps} from "./IHrefProps";
import {type IHrefQuery} from "./IHrefQuery";

export type INavigate<THrefQuery extends IHrefQuery = any> = (href: IHrefProps<THrefQuery> | string | null) => void;
