// auth/+page.server.ts
import type { Actions } from './$types';
import { auth } from '@/server/auth';
import { redirect } from '@sveltejs/kit';

export const actions = {
    signin: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        
        await auth.api.signInEmail({
            body: {
                email: email,
                password: password,
                rememberMe: true,
                callbackURL: "/",
            },
            headers: request.headers, 
        });
                throw redirect(303, '/');

    },
    
    signup: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        const confirmPassword = data.get('ComfirmPassword');
        const name = data.get('name');
        
        if (password === confirmPassword) {
            await auth.api.signUpEmail({
                body: {
                    name: name,
                    email: email,
                    password: password,
                },
            });
                    throw redirect(303, '/');

        }
    }
} satisfies Actions;