// src/routes/api/[...slugs]/+server.ts
import { Elysia, t } from 'elysia';

const app = new Elysia({ prefix: '/api' })
  .group('/user', (app) =>
      app
          .post('/sign-in', ({ body }) => body, {
              body: t.Object({
                  name: t.String()
              })
          })
          .post('/sign-up', 'Sign up')
          .post('/profile', 'Profile')
  )
    .get('/', () => 'hi')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

type RequestHandler = (v: { request: Request }) => Response | Promise<Response>

export const fallback: RequestHandler = ({ request }) => app.handle(request)
