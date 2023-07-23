import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodoStatus } from "./todoReducer";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodoStatus(id));
  };

  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.done ? "done" : ""}`}>
            <span
              onClick={() => handleToggle(todo.id)}
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
              className="todo-text"
            >
              {todo.text}
            </span>
            <button
              className="delete-button"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
            <button
              className="done-button"
              onClick={() => handleToggle(todo.id)}
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
