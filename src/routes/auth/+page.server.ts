import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '@/server/auth';

export const actions = {
	signin: async ({ request }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');

		if (!username || !password) {
			return fail(400, { error: 'Username and password are required' });
		}

		try {
			const data = await auth.api.signInUsername({
				body: {
					username: username.toString(),
					password: password.toString()
				}
			});

			if (!data?.token) {
				return fail(401, { error: 'Invalid username or password' });
			}


		} catch (error: String) {
			// Handle Better Auth API errors
			if (error?.body?.message) {
				return fail(error.statusCode || 401, {
					error: error.body.message
				});
			}

			console.error('Sign in error:', error);
			return fail(500, { error: 'An error occurred during sign in' });
		}

		// Redirect after successful sign in
		throw redirect(303, '/dashboard');
	},

	signup: async ({request }) => {
		const form = await request.formData();
		const name = form.get('name');
		const username = form.get('username');
		const password = form.get('password');
		const confirm_password = form.get('confirm-password');

		if (!name || !username || !password) {
			return fail(400, { error: 'All fields are required' });
		}

		if (password !== confirm_password) {
			return fail(400, { error: 'Passwords do not match' });
		}

		try {
			const randomId = Math.floor(Math.random() * 1000000);
			const data = await auth.api.signUpEmail({
				body: {
					email: `user${randomId}@gmail.com`,
					name: name.toString(),
					password: password.toString(),
					username: username.toString(),
					displayUsername: `user${randomId}`
				}
			});

			if (!data?.token) {
				return fail(400, { error: 'Failed to create account' });
			}


		} catch (error: String) {
			// Handle Better Auth API errors
			if (error?.body?.message) {
				return fail(error.statusCode || 400, {
					error: error.body.message
				});
			}

			console.error('Sign up error:', error);
			return fail(500, { error: 'An error occurred during sign up' });
		}

		// Redirect after successful sign up
		throw redirect(303, '/dashboard');
	}
} satisfies Actions;
