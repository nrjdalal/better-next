import { SignIn, SignOut, SignUp } from "@/components/auth"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export default async function ServerComponent() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  if (!session)
    return (
      <div>
        <SignIn />
        <SignUp />
      </div>
    )
  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
      <SignOut />
    </div>
  )
}
