import { query } from '$app/server';
import { db } from '$lib/server/db';
import { boads } from '$lib/server/db/schema/app-schema';
export const getPosts = query(async () => {
  const boards = await db
  .select({
    id: boads.id,
    name: boads.name,
    bgImgUrl: boads.bgImgUrl,
  })
  .from(boads);
  return boards
});