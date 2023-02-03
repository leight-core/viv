import {ClientError} from "../endpoint";

export class AclError extends ClientError {
	readonly tokens: string[];
	readonly requested?: string[];

	constructor(message: string, tokens: string[], requested?: string[]) {
		super(message, 403);
		this.tokens = tokens;
		this.requested = requested;
	}
}
