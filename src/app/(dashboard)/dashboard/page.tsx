import Image from "next/image"
import Link from "next/link"
import CreateBoard from "../_components/CreateBoard";
import { api } from "@/trpc/server";
import { auth } from "@clerk/nextjs";
import type { Board } from "@prisma/client";

export default async function Dashboard(){
  const { userId: ownerId } = auth()
  const boards = await api.board.getAll({ownerId: ownerId!})
  
  return(
    <div className="flex-grow pt-10 px-6 flex flex-col gap-4 bg-gray-100">
      <h1 className="text-3xl font-bold">Boards</h1>
      <div className="flex gap-2">
        <CreateBoard ownerId={ownerId!} />
       {
          boards.map((board: Board) => {
            return(
              <Link href={`/dashboard/boards/${board.id}`} key={board.id} className="relative w-56 h-40 shadow-lg rounded-md overflow-hidden flex flex-col justify-end">
                <div className="z-10 w-full h-full absolute top-0 left-0 bg-black/60"></div>
                <Image className="w-full h-full absolute top-0 left-0 " src={board.backgroundImage ? board.backgroundImage :`/images/default.png`} alt="Image of board" width="224" height="160" />
                <div className="p-2 z-20">
                  <p className="text-lg text-white font-semibold truncate">{board.name}</p>                 
                  {/* <p className="text-sm text-gray-400 font-medium">{board.author}</p>  */}
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
