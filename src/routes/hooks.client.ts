import type { Handle } from '@sveltejs/kit';
import { Redirect } from '@sveltejs/kit';
import { authClient } from '@/client/auth-client';
export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/custom')) {
		return new Response('custom response');
	}

	const response = await resolve(event);
	return response;
};