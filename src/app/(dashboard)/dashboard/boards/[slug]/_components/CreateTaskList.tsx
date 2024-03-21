
import { FaCirclePlus, FaXmark } from "react-icons/fa6";

export default async function CreateTaskList(){
    return(
        <div className="bg-white w-64 h-36 gap-4 px-2 py-4 rounded-lg flex flex-col items-center justify-center relative">
          <FaXmark size={16} className="absolute top-4 right-4" /> 
          <p className="text-lg">Create Task List</p>
          <div className="flex gap-2 items-center">
            <input type="text" placeholder="Name" className="border px-2 py-1 rounded-md" />
            <button type="button"> 
              <FaCirclePlus size={20} className="cursor-pointer" />
            </button>
          </div>
        </div>
    )
  }
