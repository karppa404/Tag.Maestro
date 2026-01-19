import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	// Tags: These tags can be applied to imgs
	tags: defineTable({
		name: v.string(),
		id: v.id('tags'),
		groupId: v.optional(v.id('groups'))
  }).index("id", ["id"]),
	// Groups: These groups can be used to orginize tags
	groups: defineTable({
		name: v.string(),
		id: v.id('groups')
  }),
	// media: This is the definition for media files
  media: defineTable({
    id: v.id('media'),
    name: v.string(),
    pathUrl: v.string(),
    size: v.number(),
    type: v.string(),
    creationTime: v.float64(),
    sha256:v.string(),
    tags: v.array(v.id('tags'))
  }).index("id", ["id"]),
});
