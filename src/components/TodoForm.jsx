import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoReducer";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your todo item"
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
