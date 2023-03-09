import {
    $Drizzle,
    type IDrizzle
}                       from "@leight/drizzle";
import {AbstractSource} from "@leight/source-server";
import {
    type IUserSource,
    type IUserSourcedConfig,
    UserSourcedConfig
}                       from "@leight/user";
import {
    inject,
    injectable
}                       from "tsyringe";

@injectable()
export class UserSource extends AbstractSource<IUserSourcedConfig> implements IUserSource {
    constructor(
        @inject($Drizzle) drizzle: IDrizzle,
    ) {
        super(drizzle, UserSourcedConfig);
    }
}

