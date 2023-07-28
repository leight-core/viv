import {z} from "@leight/utils";

export const isData = <TDataSchema extends z.ZodSchema>(test: any): test is {
    data: z.infer<TDataSchema>
} => {
    return test && Object.hasOwn(test, "data");
};
