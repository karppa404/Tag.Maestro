// src/routes/api/[...slugs]/+server.ts
import { Elysia, t } from 'elysia';
import {signIn,signUp} from '$lib/hooks/auth'
const app = new Elysia({ prefix: '/api' })
  .group('/user', (app) =>
      app
        .post(
            '/sign-in',
            async ({ body }) => {
                return signIn(body.username, body.password)
            },
            {
                body: t.Object({
                    username: t.String(),
                    password: t.String()
                })
            }
        )
        .post(
            '/sign-up',
            async ({ body }) => {
                return signUp(body.name,body.username, body.password)
            },
            {
                body: t.Object({
                    name: t.String(),
                    username: t.String(),
                    password: t.String()
                })
            }
        )
          .post('/profile', ({ body }) => body, {
              body: t.Object({
                  name: t.String()
              })
          })
  )
    .get('/', () => 'hi')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

type RequestHandler = (v: { request: Request }) => Response | Promise<Response>

export const fallback: RequestHandler = ({ request }) => app.handle(request)
