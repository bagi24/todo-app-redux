export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleTodoStatus = (id) => ({
  type: TOGGLE_TODO_STATUS,
  payload: id,
});

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload,
            done: false,
          },
        ],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_TODO_STATUS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
