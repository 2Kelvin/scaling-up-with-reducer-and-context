# scaling-up-with-reducer-and-context

![scaling_app](https://user-images.githubusercontent.com/85868026/212743850-072cbe25-bae8-49f9-a0fa-1b7ef5180d26.png)

In this project, I learnt:

- `the 3 steps on how to combine a reducer with context`:
  - [x] **Creating the context**
    - to pass down the **_current state_** which in our case is tasks and its **_dispatch_** to update it, **you need to create two separate contexts**: _TasksContext_ (provides the current list of tasks) & _TasksDispatchContext_ (provides the function that lets components dispatch actions)
  - [x] **Putting the state and dispatch into context**
    - by passing wrapping the main component's (TaskApp) children with _<TasksContext.Provider value={tasks}> followed by <TasksDispatchContext.Provider value={dispatch}>_ (fyi both have double tags)
  - [x] **Using the context anywhere in the tree**
    - this means _removing all prop drilling for the tasks & its event handlers and using the context data in the components that need it_
- each component reads the context data it needs by itself without state & event props being drilled to them
- `the state lives in the top level component (TasksApp) managed with useReducer & the current state and dispatch provided to all children components through context`
- the TasksProvider component ties the reducer and context into one file and takes in JSX (for its children) making your code more readable & less bloated and cluttered. It will manage the state through the reducer and provide context through the two contexts it carries. It also carries the reducer function in the same file. To use it just wrap the main component's children (TaskApp) with it to provide the context to all child components
- functions like _useTasks()_ & _useTasksDispatch()_ (in TasksContext file) help you add some logic later for custom components using context if you wanted. useTasks() will make any component access and read the tasks while useTasksDispatch() helps any component update the tasks. These two functions are what you call `custom hooks`. **A custom hook's name starts with _use_ and it can use any other hooks like useState, useContext etc inside it**
- I basically learnt how `combining context and reducer functions is a powerful way of scaling large applications`
- `combine a reducer with context to let any component read and update state above it`
- you can have as many context-reducer pairs in your app as you like
