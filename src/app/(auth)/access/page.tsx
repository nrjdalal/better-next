import { SignIn, SignUp } from "@/components/auth"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default async function ServerComponent() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (session) redirect("/x")

  return (
    <div>
      <SignIn />
      <SignUp />
    </div>
  )
}
