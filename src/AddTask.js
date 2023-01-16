export default function AddTask({ onAddTask }) {
  const [text, setText] = React.useState("");

  return (
    <div>
      <input
        className="text-slate-900 px-2 rounded-sm bg-slate-200 placeholder:text-slate-400"
        placeholder="add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="px-3 bg-yellow-400 shadow-md m-1 rounded-sm font-bold text-slate-800"
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </div>
  );
}
