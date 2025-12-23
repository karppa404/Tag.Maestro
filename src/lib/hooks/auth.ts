import { auth } from "@/server/auth";

export async function signIn(username:string,password:string) {
  const data = await auth.api.signInUsername({
      body: {
          username: username, // required
          password: password, // required
      },
  });
  return data?.token
}
export async function signUp(name:string,username:string,password:string) {
  const data = await auth.api.signUpEmail({
      body: {
          email: `user${Math.floor(Math.random() * 1000000)}@gmail.com`,          name: name, // required
          password: password, // required
          username: username,
          displayUsername: 'user${Math.floor(Math.random() * 1000000)}',
      },
  });
  return data.token
}
