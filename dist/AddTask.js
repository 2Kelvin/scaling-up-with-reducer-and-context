var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { TasksDispatchContext } from "../dist/TasksContext.js";

var nextId = 3;

export default function AddTask() {
  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      text = _React$useState2[0],
      setText = _React$useState2[1];

  var dispatch = React.useContext(TasksDispatchContext);

  return React.createElement(
    "div",
    null,
    React.createElement("input", {
      className: "text-slate-900 px-2 rounded-sm bg-slate-200 placeholder:text-slate-400",
      placeholder: "Add task",
      value: text,
      onChange: function onChange(e) {
        return setText(e.target.value);
      }
    }),
    React.createElement(
      "button",
      {
        className: "px-3 bg-yellow-400 shadow-md m-1 rounded-sm font-bold text-slate-800",
        onClick: function onClick() {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text
          });
        }
      },
      "Add"
    )
  );
}