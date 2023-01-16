const initialTasks = [
  { id: 0, text: "Finish React documentation", done: true },
  { id: 1, text: "Complete Tailwind CSS documentation", done: false },
  { id: 2, text: "Complete portfolio with React and Tailwind", done: false },
];

export const TasksContext = React.createContext(null);
export const TasksDispatchContext = React.createContext(null);

export function useTasks() {
  return React.useContext(TasksContext);
}

export function useTasksDispatch() {
  return React.useContext(TasksDispatchContext);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function TasksProvider({ children }) {
  const [tasks, dispatch] = React.useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
