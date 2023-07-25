import {type IWithMutation} from "@leight/rpc";
import {z}                  from "@leight/utils";

const DummySchema = z.undefined().nullish();

export type IWithLogoutMutation = IWithMutation<typeof DummySchema, typeof DummySchema>;
