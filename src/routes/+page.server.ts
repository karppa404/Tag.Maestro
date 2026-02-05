import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    // Fetch all users from the sqlite table
    const users = await db.select().from(user);

    return {
        users
    };
};