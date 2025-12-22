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
          email: "nulll@gmail.com", // required
          name: name, // required
          password: password, // required
          username: username,
          displayUsername: "NULL",
      },
  });
  return data.token
}
