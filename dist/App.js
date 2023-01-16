var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { TasksContext, TasksDispatchContext } from "../dist/TasksContext.js";
import tasksReducer from "../dist/tasksReducer.js";
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";

var initialTasks = [{ id: 0, text: "Finish React documentation", done: true }, { id: 1, text: "Complete Tailwind CSS documentation", done: false }, { id: 2, text: "Complete portfolio with React and Tailwind", done: false }];

function TaskApp() {
  var _React$useReducer = React.useReducer(tasksReducer, initialTasks),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      tasks = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  return React.createElement(
    TasksContext.Provider,
    { value: tasks },
    React.createElement(
      TasksDispatchContext.Provider,
      { value: dispatch },
      React.createElement(
        "div",
        { className: "w-fit m-auto" },
        React.createElement(
          "h1",
          { className: "text-3xl text-extrabold mb-5" },
          "My Goals January Week 3"
        ),
        React.createElement(AddTask, null),
        React.createElement(TaskList, null)
      )
    )
  );
}
export default function App() {
  return React.createElement(
    "div",
    { className: "p-4 bg-slate-800 text-white h-screen" },
    React.createElement(TaskApp, null)
  );
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));