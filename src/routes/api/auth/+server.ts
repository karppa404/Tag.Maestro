// src/routes/api/aut
import { Elysia, t } from 'elysia';

const authentication = new Elysia({ prefix: '/api/auth' })
  .post('/','hello world')
  .post('/sign-in','hello worldasdsad')
  .listen(3000)
type RequestHandler = (v: { request: Request }) => Response | Promise<Response>

export const fallback: RequestHandler = ({ request }) => authentication.handle(request)
