import Link from "next/link"
import { FaGear } from "react-icons/fa6";

import {SignOutButton} from "@clerk/nextjs"
export default function Header(){
  return(
    <header className="w-full py-4 px-10 md:px-20 border-b flex justify-between items-center">
      <div>
        <Link href="/dashboard" className="text-2xl font-bold outline-none">C/Crafter</Link>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex gap-2">
          <Link href="/dashboard/settings">
            <FaGear size="20" />
          </Link>
        </div>
        <div>
          <SignOutButton />
        </div>
      </div>
    </header>
  )
}


/*




*/
