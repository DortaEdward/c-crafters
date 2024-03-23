"use client"

import { FaCirclePlus, FaXmark } from "react-icons/fa6";
import { useState } from "react"

type Props = {
  id: number
  name: string
  task: Task 
}

export default function TaskList(){

  const tasks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  const [taskName, setTaskName] = useState("")

    return(
    <div className="w-72 bg-white rounded-lg px-2 flex flex-col gap-2 pt-2 pb-4 max-h-full h-full">
      <div className="h-36 flex flex-col items-center justify-center relative gap-4 py-2">
        <FaXmark size={16} className="absolute top-4 right-4" />
        <p className="text-lg">List Name</p>
        <div className="flex gap-2 items-center">
          <input type="text" placeholder="Creat New Task" className="border px-2 py-1 rounded-md" />
          <button type="button"> 
            <FaCirclePlus size={20} className="cursor-pointer" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 flex-grow overflow-y-auto h-full">
        {
          tasks.map((task,idx) => {
            return(
            <div key={`${task}-${idx}`} className="w-full bg-red-200 px-2 py-3 rounded-md">
              <p className="font-bold">Task Name</p>
            </div>
            )
          })
        }
      </div>
    </div>
    )
  }
