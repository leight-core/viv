import {ClientError} from "@leight/shared";

export class UndefinedUserError extends ClientError {
    constructor(message: string) {
        super(message, 403);
    }
}
