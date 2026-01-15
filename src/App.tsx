import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

const Todo = (props) => {
  return (
    <ul className="flex m-4">
      <li className="flex justify-between w-full items-start gap-3 ">
        <label className="flex gap-3 min-w-0 flex-1">
          <input
            type="checkbox"
            checked={props.isCompleted}
            onChange={props.onToggle}
          />
          <span
            className={`break-all ${
              props.isCompleted ? "line-through text-gray-400" : ""
            }`}
          >
            {props.title}
          </span>
        </label>
        <button
          onClick={props.onDelete}
          className="border bg-gray-200 cursor-pointer flex-none w-6 h-6 flex items-center justify-center"
        >
          ×
        </button>
      </li>
    </ul>
  );
};

function App() {
  const [todos, setTodos] = useState([]);
  const toggleTodo = (index) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  const deleteTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };
  const purgeTodos = () => {
    setTodos((prev) => prev.filter((todo) => !todo.isCompleted));
  };

  const todoList = todos.map((todo, index) => {
    return (
      <Todo
        key={index}
        title={todo.title}
        isCompleted={todo.isCompleted}
        onToggle={() => toggleTodo(index)}
        onDelete={() => deleteTodo(index)}
      />
    );
  });

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    //ここのonSubmitはただの自分の関数（極論なんでもいい）
    const title = data.title.trim();
    if (!title) return;
    setTodos((prev) => [...prev, { title, isCompleted: false }]);
    reset();
  };

  return (
    <div className="p-5 max-w-xl mx-auto">
      <div className="flex items-center justify-between gap-4 border-b-1 pb-3">
        <h1 className="text-5xl font-bold">Todos</h1>
        <button
          className="border bg-gray-200 cursor-pointer w-15 h-7"
          onClick={purgeTodos}
        >
          Purge
        </button>
      </div>
      {todoList}
      <form
        className="flex items-center gap-3 mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="text" className="border flex-1" {...register("title")} />
        <button className="border bg-gray-200 cursor-pointer pl-1 pr-1">
          Add
        </button>
      </form>
    </div>
  );
}

export default App;
