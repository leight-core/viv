import {ClientError} from "@leight-core/viv";

export interface IUser {
    readonly userId?: string | null;
    readonly tokens: string[];

    required(): string;

    optional(): string | undefined;

    /**
     * Passes if user has any of the specified tokens.
     */
    hasAny(tokens?: string[]): boolean;

    /**
     * Passes if user has any of the specified tokens; otherwise an exception is thrown.
     */
    checkAny(tokens?: string[]): void;

    /**
     * Passes if user has all specified tokens.
     */
    hasTokens(tokens?: string[]): boolean;

    /**
     * Passes if user has all specified tokens.
     */
    checkTokens(tokens?: string[]): void;
}

export interface IUserRequest {
    userId?: string | null;
    tokens?: string[];
}

export interface IWithUser {
    user: IUser;
}

export class UndefinedUserError extends ClientError {
    constructor(message: string) {
        super(message, 403);
    }
}

export class AclError extends ClientError {
    readonly tokens: string[];
    readonly requested?: string[];

    constructor(message: string, tokens: string[], requested?: string[]) {
        super(message, 403);
        this.tokens    = tokens;
        this.requested = requested;
    }
}
