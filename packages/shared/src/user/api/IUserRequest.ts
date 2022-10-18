/**
 * Basic request from which an IUser should be created.
 */
export interface IUserRequest {
    userId?: string | null;
    tokens?: string[];
}
