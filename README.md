# scaling-up-with-reducer-and-context

n this project, I learnt:

- `the 3 steps on how to combine a reducer with context`:
  - [x] **Creating the context**
    - to pass down the **_current state_** which in our case is tasks and its **_dispatch_** to update it, **you need to create two separate contexts**: _TasksContext_ (provides the current list of tasks) & _TasksDispatchContext_ (provides the function that lets components dispatch actions)
  - [x] **Putting the state and dispatch into context**
    - by passing wrapping the main component's (TaskApp) children with _<TasksContext.Provider value={tasks}> followed by <TasksDispatchContext.Provider value={dispatch}>_ (fyi both have double tags)
  - [x] **Using the context anywhere in the tree**
    - this means _removing all prop drilling for the tasks & its event handlers and using the context data in the components that need it_
- each component reads the context data it needs by itself without state & event props being drilled to them
- `the state lives in the top level component (TasksApp) managed with useReducer & the current state and dispatch provided to all children components through context`
