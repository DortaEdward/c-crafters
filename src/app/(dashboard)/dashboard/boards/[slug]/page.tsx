import { api } from "@/trpc/server"
import { auth } from "@clerk/nextjs"
import dayjs from "dayjs"
import { redirect } from "next/navigation"
import { FaCirclePlus, FaXmark } from "react-icons/fa6";
import CreateTaskList from "./_components/CreateTaskList";
import TaskList from "./_components/TaskList";

export default function BoardId({ params }: { params: { slug: string } }){
  const boardId = Number(params.slug)
  const { userId } = auth()
  const board = api.board.getBoardById({id: boardId, ownerId: userId!})

  const createdAtDate = dayjs(board?.createdAt)
  const formattedCreatedDate = createdAtDate.format("MMMM DD YYYY") 
  const updatedAtDate = dayjs(board?.updatedAt)
  const formattedUpdateDate = updatedAtDate.format("MMMM DD YYYY") 

  const arr = [1]

  return(
    <div className="p-2 flex flex-col gap-2 flex-grow h-full">
      <div className="w-full bg-white flex gap-3 items-end justify-between md:px-10 py-2 rounded-lg">
        <h1 className="text-4xl font-bold">{board?.name}Yea</h1>
        <div className="flex gap-2">
          <p className="font-medium">Created At: <span className="text-sm">{formattedCreatedDate}</span></p>
          <p className="font-medium">Updated At: <span className="text-sm">{formattedUpdateDate}</span></p>
        </div>
      </div>

      <div className="flex gap-2 flex-grow h-full">
        {
          arr.map((idx, el) => {
            return(
              <>
                <div key={el}>
                  <TaskList />
                </div>
              </>
            )
          })
        }

        <CreateTaskList />
      </div>
    </div>
  )
}
