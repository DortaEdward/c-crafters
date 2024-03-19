"use client";
import { FaCirclePlus } from "react-icons/fa6";
import { useState } from "react";
import { api } from "@/trpc/react";

type Props = {
  ownerId: string;
};

export default function CreateBoard({ ownerId }: Props) {
  const [boardName, setBoardName] = useState<string>("");
  const queryClient = api.useUtils();

  const createBoardMutation = api.board.create.useMutation({
    onSuccess: async function () {
      setBoardName("");
      // not refreshing
      await queryClient.board.getAll.invalidate();
    },
    onError: function(err){
      setBoardName("");
      // create a toast that indicated there was error with creating the board
      console.log("There was an error creating the board: ", err)
    }
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await createBoardMutation.mutateAsync({
      ownerId: ownerId,
      name: boardName,
      backgroundImage: "",
    });
  }

  return (
    <div className="flex h-40 w-56 flex-col items-center justify-center gap-3 rounded-md bg-white shadow-lg">
      <p className="text-lg font-medium">Create Board</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-3">
        <input
          placeholder="Enter Name"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
          className="rounded border px-2 py-1 outline-none"
        />
        <button type="submit">
          <FaCirclePlus size="24" className="cursor-pointer" />
        </button>
      </form>
    </div>
  );
}
