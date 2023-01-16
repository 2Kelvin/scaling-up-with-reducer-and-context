var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialTasks = [{ id: 0, text: "Finish React documentation", done: true }, { id: 1, text: "Complete Tailwind CSS documentation", done: false }, { id: 2, text: "Complete portfolio with React and Tailwind", done: false }];

export var TasksContext = React.createContext(null);
export var TasksDispatchContext = React.createContext(null);

export function useTasks() {
  return React.useContext(TasksContext);
}

export function useTasksDispatch() {
  return React.useContext(TasksDispatchContext);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added":
      {
        return [].concat(_toConsumableArray(tasks), [{
          id: action.id,
          text: action.text,
          done: false
        }]);
      }
    case "changed":
      {
        return tasks.map(function (t) {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
    case "deleted":
      {
        return tasks.filter(function (t) {
          return t.id !== action.id;
        });
      }
    default:
      {
        throw Error("Unknown action: " + action.type);
      }
  }
}

export function TasksProvider(_ref) {
  var children = _ref.children;

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
      children
    )
  );
}