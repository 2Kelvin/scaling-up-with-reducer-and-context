var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { useTasksDispatch } from "./TasksContext.js";

export default function Task(_ref) {
  var task = _ref.task;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isEditing = _React$useState2[0],
      setIsEditing = _React$useState2[1];

  var dispatch = useTasksDispatch();
  var taskContent = void 0;

  if (isEditing) {
    taskContent = React.createElement(
      React.Fragment,
      null,
      React.createElement("input", {
        className: "text-slate-900 px-2 rounded-sm bg-slate-200",
        value: task.text,
        onChange: function onChange(e) {
          dispatch({
            type: "changed",
            task: Object.assign({}, task, {
              text: e.target.value
            })
          });
        }
      }),
      React.createElement(
        "button",
        {
          className: "px-3 bg-green-400 shadow-md m-1 rounded-sm font-bold text-slate-800",
          onClick: function onClick() {
            return setIsEditing(false);
          }
        },
        "Save"
      )
    );
  } else {
    taskContent = React.createElement(
      React.Fragment,
      null,
      task.text,
      React.createElement(
        "button",
        {
          className: "px-3 bg-green-400 shadow-md m-1 rounded-sm font-bold text-slate-800",
          onClick: function onClick() {
            return setIsEditing(true);
          }
        },
        "Edit"
      )
    );
  }

  return React.createElement(
    "label",
    null,
    React.createElement("input", {
      className: "mr-2 cursor-pointer",
      type: "checkbox",
      checked: task.done,
      onChange: function onChange(e) {
        dispatch({
          type: "changed",
          task: Object.assign({}, task, {
            done: e.target.checked
          })
        });
      }
    }),
    taskContent,
    React.createElement(
      "button",
      {
        className: "px-3 bg-red-400 shadow-md m-1 rounded-sm font-bold text-slate-800",
        onClick: function onClick() {
          return dispatch({
            type: "deleted",
            id: task.id
          });
        }
      },
      "Delete"
    )
  );
}