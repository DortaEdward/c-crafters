"use client"

import type { Task } from "@prisma/client";
import { FaCirclePlus, FaXmark } from "react-icons/fa6";
import { useState } from "react"

export default function CreateTaskList(){

    const [taskName, setTaskName] = useState("")
  
    return(
        <div className="bg-white w-72 h-36 gap-4 px-2 py-4 rounded-lg flex flex-col items-center justify-center relative">
          <FaXmark size={16} className="absolute top-4 right-4" /> 
          <p className="text-lg">Create Task List</p>
          <div className="flex gap-2 items-center">
            <input value={taskName} onChange={(e) => setTaskName(e.target.value)} type="text" placeholder="Name" className="border px-2 py-1 rounded-md" />
            <button type="button"> 
              <FaCirclePlus size={20} className="cursor-pointer" />
            </button>
          </div>
        </div>
    )
  }
