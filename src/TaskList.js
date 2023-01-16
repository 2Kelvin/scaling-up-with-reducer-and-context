import { TasksContext } from "../dist/TasksContext.js";
import Task from "./Task.js";

export default function TaskList() {
  const tasks = React.useContext(TasksContext);

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
