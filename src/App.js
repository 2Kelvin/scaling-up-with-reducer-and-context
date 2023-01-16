import { TasksContext, TasksDispatchContext } from "../dist/TasksContext.js";
import tasksReducer from "../dist/tasksReducer.js";
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";

const initialTasks = [
  { id: 0, text: "Finish React documentation", done: true },
  { id: 1, text: "Complete Tailwind CSS documentation", done: false },
  { id: 2, text: "Complete portfolio with React and Tailwind", done: false },
];

function TaskApp() {
  const [tasks, dispatch] = React.useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <div className="w-fit m-auto">
          <h1 className="text-3xl text-extrabold mb-5">
            My Goals January Week 3
          </h1>
          <AddTask />
          <TaskList />
        </div>
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
export default function App() {
  return (
    <div className="p-4 bg-slate-800 text-white h-screen">
      <TaskApp />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
