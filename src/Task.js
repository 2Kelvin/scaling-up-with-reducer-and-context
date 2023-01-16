import { useTasksDispatch } from "./TasksContext.js";

export default function Task({ task }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;

  if (isEditing) {
    taskContent = (
      <React.Fragment>
        <input
          className="text-slate-900 px-2 rounded-sm bg-slate-200"
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button
          className="px-3 bg-green-400 shadow-md m-1 rounded-sm font-bold text-slate-800"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </React.Fragment>
    );
  } else {
    taskContent = (
      <React.Fragment>
        {task.text}
        <button
          className="px-3 bg-green-400 shadow-md m-1 rounded-sm font-bold text-slate-800"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </React.Fragment>
    );
  }

  return (
    <label>
      <input
        className="mr-2 cursor-pointer"
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      <button
        className="px-3 bg-red-400 shadow-md m-1 rounded-sm font-bold text-slate-800"
        onClick={() =>
          dispatch({
            type: "deleted",
            id: task.id,
          })
        }
      >
        Delete
      </button>
    </label>
  );
}
