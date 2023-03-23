import {
    type IUserSourceEx,
    type IUserSourceSchema
}                       from "@leight/user";
import {UserBaseSource} from "../sdk";

export class UserSourceEx extends UserBaseSource implements IUserSourceEx {
    public findByEmail(email: string): Promise<IUserSourceSchema["Entity"]> {
        return this.prisma().findUniqueOrThrow({where: {email}});
    }
}
