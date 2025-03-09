import { SignOut } from "@/components/auth"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default async function ServerComponent() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) redirect("/access")

  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
      <SignOut />
    </div>
  )
}
