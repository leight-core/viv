export class ClientError extends Error {
    readonly code: number;

    constructor(message: string, code = 400) {
        super(message);
        this.code = code;
    }
}
