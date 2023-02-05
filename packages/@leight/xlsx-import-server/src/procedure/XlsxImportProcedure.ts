import {type IWithHandler, withHandler} from "@leight/trpc-server";
import {type IRequestType, type IResponseType} from "@leight/xlsx-import";
import {ImportServiceContext} from "../context";

export const XlsxImportProcedure: IWithHandler<IRequestType, IResponseType> = withHandler({
    defaultErrorMessage: "Could not start an import job. Yaaykes!",
    handler: async ({request, container}) => ImportServiceContext(container).resolve().async(request),
});
