import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, boolean, index } from "drizzle-orm/pg-core";

export const boards = pgTable("board", {
    id: text("id").primaryKey().unique(),
    name: text("name").notNull(),
    boardLink:text("link").notNull(),
    bgImgUrl: text("BgUrl").notNull(),
});
