// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch(action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload
      }
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      }
    case "CLEAR_TODO":
      return {
        ...state,
        todos: action.payload
      }
    case "TODO_ERROR":
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}