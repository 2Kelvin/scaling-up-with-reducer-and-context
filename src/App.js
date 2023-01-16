import { TasksProvider } from "./TasksContext.js";
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";

function TaskApp() {
  return (
    <TasksProvider>
      <div className="w-fit m-auto">
        <h1 className="text-3xl text-extrabold mb-5">Goals: January Week 3 </h1>
        <AddTask />
        <TaskList />
      </div>
    </TasksProvider>
  );
}
export default function App() {
  return (
    <div className="p-4 bg-slate-800 text-white h-screen grid place-content-center">
      <TaskApp />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
