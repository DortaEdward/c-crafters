"use client"

import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs"
import Link from "next/link"

export default function Header(){
  const {isSignedIn, user} = useUser()

  return(
    <header className="w-full py-4 px-10 md:px-20 border-b flex justify-between items-center">
      <div>
        <Link href={`${isSignedIn ? "/dashboard" :"/"}`} className="text-2xl font-bold outline-none">C/Crafter</Link>
      </div>
      <div>
        {
          isSignedIn
            ? <div className="flex gap-6">
              <Link href="/dashboard" className="font-semibold text-lg">Dashboard</Link>
              <div className="font-medium text-lg">
                <SignOutButton />
              </div>
            </div>
            : <SignInButton />
        }
      </div>
    </header>
  )
}
