import { TasksContext, useTasks } from "./TasksContext.js";
import Task from "./Task.js";

export default function TaskList() {
  const tasks = useTasks();

  return (
    <ul className="my-5">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
