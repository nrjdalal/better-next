"use client"

import { authClient } from "@/lib/auth/client"
import { useRouter } from "next/navigation"

export const SignIn = () => {
  const router = useRouter()

  return (
    <button
      onClick={async () => {
        await authClient.signIn.email({
          email: "johndoe@acme.com",
          password: "JohnDoeAcmeCom",
        })
        router.refresh()
      }}
    >
      Sign in
    </button>
  )
}

export const SignUp = () => {
  const router = useRouter()

  return (
    <button
      onClick={async () => {
        await authClient.signUp.email({
          name: "John Doe",
          email: "johndoe@acme.com",
          password: "JohnDoeAcmeCom",
        })
        router.refresh()
      }}
    >
      Sign up
    </button>
  )
}

export const SignOut = () => {
  const router = useRouter()

  return (
    <button
      onClick={async () => {
        await authClient.signOut()
        router.refresh()
      }}
    >
      Sign out
    </button>
  )
}
