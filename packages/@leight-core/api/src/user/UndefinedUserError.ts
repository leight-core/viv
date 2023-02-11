import {ClientError} from "../endpoint";

export class UndefinedUserError extends ClientError {
	constructor(message: string) {
		super(message, 403);
	}
}
