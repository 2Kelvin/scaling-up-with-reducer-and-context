import { TasksProvider } from "./TasksContext.js";
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";

function TaskApp() {
  return React.createElement(
    TasksProvider,
    null,
    React.createElement(
      "div",
      { className: "w-fit m-auto" },
      React.createElement(
        "h1",
        { className: "text-3xl text-extrabold mb-5" },
        "Goals: January Week 3 "
      ),
      React.createElement(AddTask, null),
      React.createElement(TaskList, null)
    )
  );
}
export default function App() {
  return React.createElement(
    "div",
    { className: "p-4 bg-slate-800 text-white h-screen grid place-content-center" },
    React.createElement(TaskApp, null)
  );
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));