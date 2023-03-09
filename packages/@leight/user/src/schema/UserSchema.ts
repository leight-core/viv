import {
    id,
    text,
    timestamp,
    uniqueIndex,
    withTable
} from "@leight/drizzle";

export const UserSchema = withTable("User", {
    id:            id(),
    name:          text("name"),
    email:         text("email"),
    emailVerified: timestamp("emailVerified"),
    image:         text("image"),
}, table => ({
    User_email_key: uniqueIndex("User_email_key").on(table.email),
}));
