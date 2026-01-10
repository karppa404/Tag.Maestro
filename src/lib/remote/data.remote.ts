import { prerender } from '$app/server';
import { db } from '$lib/server/db';
import {boards } from '$lib/server/db/schema/app-schema';
export const getBoards = prerender(async () => {
  const schema = await db
  .select({
    id: boards.id,
    name: boards.name,
    bgImgUrl: boards.bgImgUrl,
    boardLink:boards.boardLink
    
  })
  .from(boards);
  return schema
});