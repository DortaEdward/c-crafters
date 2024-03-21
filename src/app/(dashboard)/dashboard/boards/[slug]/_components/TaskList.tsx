"use client"

import type { Task } from "@prisma/client";
import { FaCirclePlus, FaXmark } from "react-icons/fa6";

type Props = {
  id: number
  name: string
  task: Task 
}

export default function TaskList(){
    return(
        <div className="flex flex-col items-center gap-4 px-2 py-4">
          <FaXmark size={16} className="absolute top-4 right-4" /> 
          <p className="text-lg">List Name</p>
          <div className="flex gap-2 items-center">
            <input type="text" placeholder="Name" className="border px-2 py-1 rounded-md" />
            <button type="button"> 
              <FaCirclePlus size={20} className="cursor-pointer" />
            </button>
          </div>
        </div>
    )
  }
