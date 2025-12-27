import { relations } from 'drizzle-orm';
import { pgTable, text, timestamp, boolean, index } from 'drizzle-orm/pg-core';
import { user } from './auth-schema';

export const boards = pgTable('board', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	thumbnail: text('thumbnail').notNull(),
	sfw: boolean().notNull().default(false)
});
export const post = pgTable(
	'post',
	{
		id: text('id').primaryKey(),
		title: text('title'),
		authorId: text('author_id')
			.notNull()
			.references(() => user.id, { onDelete: 'cascade' }),
		boardId: text('board_id')
			.notNull()
			.references(() => boards.id, { onDelete: 'cascade' }),
		postMD: text('post_md'),
		media: text('media').array(),

		createdAt: timestamp('created_at').defaultNow().notNull()
	},
	(table) => [
		index('post_author_idx').on(table.authorId),
		index('post_board_idx').on(table.boardId)
	]
);

export const comments = pgTable(
  'comment',
  {
    id: text('id').primaryKey(),

    postId: text('post_id')
      .notNull()
      .references(() => post.id, { onDelete: 'cascade' }),

    parentCommentId: text('parent_comment_id'),

    authorId: text('author_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),

    postMD: text('post_md'),

    media: text('media').array(),

    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (table) => [
    index('comment_post_idx').on(table.postId),
    index('comment_parent_idx').on(table.parentCommentId),
    index('comment_author_idx').on(table.authorId),
  ]
);


export const boardRelations = relations(boards, ({ many }) => ({
	posts: many(post)
}));
export const postRelations = relations(post, ({ one, many }) => ({
	author: one(user, {
		fields: [post.authorId],
		references: [user.id]
	}),
	board: one(boards, {
		fields: [post.boardId],
		references: [boards.id]
	}),
	comments: many(comments)
}));
export const commentRelations = relations(comments, ({ one, many }) => ({
  author: one(user, {
    fields: [comments.authorId],
    references: [user.id],
  }),

  post: one(post, {
    fields: [comments.postId],
    references: [post.id],
  }),

  parent: one(comments, {
    fields: [comments.parentCommentId],
    references: [comments.id],
  }),

  replies: many(comments),
}));
