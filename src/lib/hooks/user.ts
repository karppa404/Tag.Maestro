import * as z from "zod/mini";

const signIn = z.object({ name: z.string(), password: z.string()});

const signup = z.object({ name: z.string().check(z.minLength(3)), password: z.string() });
