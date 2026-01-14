import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const Todo = (props) => {
    return (
      <ul className="flex m-4">
        <li className="flex justify-between w-full items-start gap-3 ">
          <label className="flex gap-3 flex-1 min-w-0 flex-1">
            <input type="checkbox" />
            <span className="break-all">{props.title}</span>
          </label>
          <button className="border bg-gray-200 cursor-pointer flex-none w-6 h-6 flex items-center justify-center">
            ×
          </button>
        </li>
      </ul>
    );
  };

  const todos = [
    { title: "aaa", isCompleted: false },
    { title: "bbb", isCompleted: false },
    { title: "ccc", isCompleted: false },
  ];

  const todoList = todos.map((todo) => {
    return <Todo title={todo.title} isCompleted={todo.isCompleted} />;
  });

  return (
    <div className="p-5 max-w-xl mx-auto">
      <div className="flex items-center justify-between gap-4 border-b-1 pb-3">
        <h1 className="text-5xl font-bold">Todos</h1>
        <button className="border bg-gray-200 cursor-pointer w-15 h-7">
          Purge
        </button>
      </div>
      {todoList}
      <form className="flex items-center gap-3 mt-5">
        <input type="text" className="border flex-1" />
        <button className="border bg-gray-200 cursor-pointer pl-1 pr-1">
          Add
        </button>
      </form>
    </div>
  );
}

export default App;
