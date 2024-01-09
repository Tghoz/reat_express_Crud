import { useEffect } from "react";

import Card from "../components/Card";
import { useTasks } from "../context/Context";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  function renderMain() {
    if (tasks.length === 0)
      return <h1 className="text-3xl text-white">No tasks yet </h1>;

    return tasks.map((task) => <Card task={task} key={task.id} />);
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-light text-center">Tasks</h1>
      <div className="grid grid-cols-3 gap-3">{renderMain()}</div>
    </div>
  );
}

export default TasksPage;
