import { TasksContext } from "../dist/TasksContext.js";
import Task from "./Task.js";

export default function TaskList() {
  var tasks = React.useContext(TasksContext);

  return React.createElement(
    "ul",
    { className: "my-5" },
    tasks.map(function (task) {
      return React.createElement(
        "li",
        { key: task.id },
        React.createElement(Task, { task: task })
      );
    })
  );
}