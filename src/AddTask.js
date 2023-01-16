import { TasksDispatchContext } from "../dist/TasksContext.js";

let nextId = 3;

export default function AddTask() {
  const [text, setText] = React.useState("");
  const dispatch = React.useContext(TasksDispatchContext);

  return (
    <div>
      <input
        className="text-slate-900 px-2 rounded-sm bg-slate-200 placeholder:text-slate-400"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="px-3 bg-yellow-400 shadow-md m-1 rounded-sm font-bold text-slate-800"
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </div>
  );
}
