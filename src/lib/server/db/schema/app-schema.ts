// ./app-schema.ts
import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, index } from "drizzle-orm/pg-core";
import { user } from "./auth-schema"; // Import user table

export const boards = pgTable("board", {
    id: text("id").primaryKey().unique(),
    name: text("name").notNull(),
    boardLink: text("link").notNull(),
    bgImgUrl: text("BgUrl").notNull(),
});

export const posts = pgTable(
  "post",
  {
    id: text("id").primaryKey().unique(),
    boardId: text("board_id")
      .notNull()
      .references(() => boards.id, { onDelete: "cascade" }),
    authorId: text("author_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    title: text("title").notNull(),
    body: text("body").notNull(), // Postgres text type can handle 40k+ chars
    imageUrls: text("image_urls").array(), // Array of image URLs
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index("post_boardId_idx").on(table.boardId),
    index("post_authorId_idx").on(table.authorId),
  ]
);

export const comments = pgTable(
  "comment",
  {
    id: text("id").primaryKey().unique(),
    postId: text("post_id")
      .notNull()
      .references(() => posts.id, { onDelete: "cascade" }),
    replyToId: text("reply_to_id"), // ID of the user being replied to (can be null for top-level comments)
    boardId: text("board_id")
      .notNull()
      .references(() => boards.id, { onDelete: "cascade" }),
    authorId: text("author_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    title: text("title"),
    body: text("body").notNull(), // Postgres text type can handle 40k+ chars
    imageUrls: text("image_urls").array(), // Array of image URLs
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index("comment_postId_idx").on(table.postId),
    index("comment_boardId_idx").on(table.boardId),
    index("comment_authorId_idx").on(table.authorId),
    index("comment_replyToId_idx").on(table.replyToId),
  ]
);

// Relations
export const boardsRelations = relations(boards, ({ many }) => ({
  posts: many(posts),
  comments: many(comments),
}));

export const postsRelations = relations(posts, ({ one, many }) => ({
  board: one(boards, {
    fields: [posts.boardId],
    references: [boards.id],
  }),
  author: one(user, {
    fields: [posts.authorId],
    references: [user.id],
  }),
  comments: many(comments),
}));

export const commentsRelations = relations(comments, ({ one }) => ({
  post: one(posts, {
    fields: [comments.postId],
    references: [posts.id],
  }),
  board: one(boards, {
    fields: [comments.boardId],
    references: [boards.id],
  }),
  author: one(user, {
    fields: [comments.authorId],
    references: [user.id],
  }),
  replyTo: one(user, {
    fields: [comments.replyToId],
    references: [user.id],
  }),
}));