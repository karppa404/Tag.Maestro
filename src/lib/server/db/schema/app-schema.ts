import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, boolean, index } from "drizzle-orm/pg-core";

export const boads = pgTable("board", {
    id: text("id").primaryKey().unique(),
    name: text("name").notNull(),
    bgImgUrl: text("url").notNull(),
});
