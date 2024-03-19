"use client"
import { FaCirclePlus } from "react-icons/fa6";
import { useState } from "react"

export default function CreateBoard(){
  const [boardName, setBoardName] = useState<string>("")
    return(
              <div  className="w-56 h-40 shadow-lg rounded-md flex flex-col justify-center items-center gap-3 bg-white">
                <p className="font-medium text-lg">Create Board</p>
                <input
                  placeholder="Enter Name"
                  value={boardName}
                  onChange={(e) => setBoardName(e.target.value)}
                  className="border rounded px-2 py-1 outline-none"
                />
                <FaCirclePlus size="24" className="cursor-pointer" />         
              </div>
 
    )
  }
