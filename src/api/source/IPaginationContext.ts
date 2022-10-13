import {PaginationConfig} from "antd/es/pagination";

export interface IPaginationContext {
    pagination(): PaginationConfig | false | undefined;
}
