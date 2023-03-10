import {
    $ChunkService,
    type IChunkService,
    type IFileSourceSchema
}                  from "@leight/file";
import {
    Endpoint,
    type IEndpointFactory
}                  from "@leight/next.js-server";
import "reflect-metadata";
import {container} from "tsyringe";

/**
 * Export default this to handle chunk commits.
 */
export const ChunkCommitEndpoint: IEndpointFactory<IFileSourceSchema["Entity"]> = (
    target,
    withTokens
) => {
    return Endpoint<IChunkService.CommitProps, IFileSourceSchema["Entity"]>({
        container:  target,
        withTokens: withTokens || ["user"],
        async handler({body, userService}) {
            return container.resolve<IChunkService>($ChunkService).commit({
                ...body,
                userId: userService.optional(),
            });
        },
    });
};
