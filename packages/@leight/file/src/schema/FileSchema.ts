import {
    cuid2,
    id,
    integer,
    string,
    text,
    timestamp,
    uniqueIndex,
    withTable
}                   from "@leight/drizzle";
import {UserSchema} from "@leight/user";

export const FileSchema = withTable("File", {
    id:       id(),
    path:     text("path").notNull(),
    name:     text("name").notNull(),
    mime:     string("mime").notNull(),
    location: text("location").notNull(),
    size:     integer("size").notNull(),
    ttl:      integer("size"),
    created:  timestamp("created").notNull(),
    userId:   cuid2("userId").references(() => UserSchema.id),
}, table => ({
    File_userId_path_name_key: uniqueIndex("File_userId_path_name_key").on(table.userId, table.path, table.name),
}));
