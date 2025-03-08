"use client"

import { signIn, signOut, signUp } from "@/lib/auth/client"
import { useRouter } from "next/navigation"

export const SignIn = () => {
  const router = useRouter()

  return (
    <button
      onClick={async () => {
        await signIn.email({
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
        await signUp.email({
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
        await signOut()
        router.refresh()
      }}
    >
      Sign out
    </button>
  )
}
