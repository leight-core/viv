import {
    AclError,
    diffOf,
    intersectOf,
    IUser,
    IUserRequest,
    UndefinedUserError
} from "@leight/viv";

export const User = ({userId, tokens = []}: IUserRequest | undefined = {}): IUser => {
    const $user: IUser = ({
        userId,
        tokens,
        required:    () => {
            if (!userId) {
                throw new UndefinedUserError("User not available");
            }
            return userId;
        },
        optional:    () => userId || undefined,
        hasAny:      $tokens => $tokens && $tokens.length > 0 ? intersectOf(tokens, $tokens).length > 0 : true,
        checkAny:    $tokens => {
            if (!$user.hasAny($tokens)) {
                throw new AclError("User does not have required tokens.", tokens, $tokens);
            }
        },
        hasTokens:   $tokens => $tokens && $tokens.length > 0 ? diffOf($tokens, tokens).length === $tokens.length : true,
        checkTokens: $tokens => {
            if (!$user.hasTokens($tokens)) {
                throw new AclError("User does not have required tokens.", tokens, $tokens);
            }
        }
    });

    return $user;
};
