import {type z}                  from "@leight/utils";
import {type IMutationOptions}   from "./IMutationOptions";
import {type IUseMutationResult} from "./IUseMutationResult";

export type IUseMutation<
    TRequestSchema extends z.ZodSchema,
    TResponseSchema extends z.ZodSchema,
> = (props?: IMutationOptions<z.infer<TRequestSchema>, z.infer<TResponseSchema>>) => IUseMutationResult<z.infer<TRequestSchema>, z.infer<TResponseSchema>>
