import Task from "./Task.js";

export default function TaskList(_ref) {
  var tasks = _ref.tasks,
      onChangeTask = _ref.onChangeTask,
      onDeleteTask = _ref.onDeleteTask;

  return React.createElement(
    "ul",
    { className: "my-5" },
    tasks.map(function (task) {
      return React.createElement(
        "li",
        { key: task.id },
        React.createElement(Task, {
          task: task,
          onChangeTask: onChangeTask,
          onDeleteTask: onDeleteTask
        })
      );
    })
  );
}