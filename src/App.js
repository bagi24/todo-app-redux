import React from "react";

import { Provider } from "react-redux";
import store from "./components/store";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import DoneList from "./components/DoneList";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TodoForm />
        <TodoList />
        <DoneList />
      </div>
    </Provider>
  );
};

export default App;
