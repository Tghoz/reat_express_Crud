/* eslint-disable react/prop-types */

import { useTasks } from "../context/Context";
import { useNavigate } from "react-router-dom";

function Card({ task }) {
  const { deleteTasks, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-zinc-700 text-white rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span>{task.done === 1 ? "✅" : "❌"}</span>
      </header>
      <p className="text-xs">{task.description}</p>
      <span>{task.createAt}</span>

      <dir className="flex gap-x-2">
        <button
          className="bg-red-600 px-2 py-1 text-white"
          onClick={() => deleteTasks(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-slate-600 px-2 py-1 text-white"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-green-600 px-2 py-1 text-white"
          onClick={() => handleDone(task.done)}
        >
          Toggle Task
        </button>
      </dir>
    </div>
  );
}

export default Card;
