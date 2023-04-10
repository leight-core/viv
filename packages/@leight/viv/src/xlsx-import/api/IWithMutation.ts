import {type IWithTrpcMutation} from "../../trpc";
import {type IRequestType}      from "./IRequestType";
import {type IResponseType}     from "./IResponseType";

export type IWithMutation = IWithTrpcMutation<IRequestType, IResponseType>;
