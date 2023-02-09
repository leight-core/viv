import {
    $ChunkService,
    type IChunkService,
    type IFileSourceConfig
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
export const ChunkCommitEndpoint: IEndpointFactory<IFileSourceConfig["Entity"]> = (
    target,
    withTokens
) => {
    return Endpoint<IChunkService.CommitProps, IFileSourceConfig["Entity"]>({
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
