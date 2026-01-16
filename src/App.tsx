import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import { Todo } from "./component/Todo";

type TodoItems = {
  id: string;
  title: string;
  isCompleted: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodoItems[]>([]);
  const toggleTodo = (index) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  const deleteTodo = (index) => {
    if (!confirm("Sure?")) {
      return;
    }
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };
  const purgeCompletedTodos = () => {
    if (!confirm("Sure?")) {
      return;
    }
    setTodos((prev) => prev.filter((todo) => !todo.isCompleted));
  };
  const clearAll = () => {
    if (!confirm("Sure?")) {
      return;
    }
    setTodos([]);
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
      <div className="flex items-center justify-between gap-4 border-b pb-3">
        <h1 className="text-5xl font-bold tracking-tight">Todos</h1>
        <div>
          <button
            className="border-2 bg-gray-200 cursor-pointer h-9 px-3 text-sm mr-2 rounded hover:bg-gray-300"
            onClick={purgeCompletedTodos}
          >
            完了済みを削除
          </button>
          <button
            className=" border-2 border-zinc-900 bg-red-500 cursor-pointer h-9 px-3 text-sm text-bold rounded text-white hover:bg-red-600 font-mono"
            onClick={clearAll}
          >
            全削除
          </button>
        </div>
      </div>
      {todoList}
      <form
        className="flex items-center gap-2 mt-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          className="border rounded flex-1 outline-none focus:border-2"
          {...register("title")}
        />
        <button className="border bg-gray-200 rounded cursor-pointer pl-1 pr-1 hover:bg-gray-300">
          Add
        </button>
      </form>
    </div>
  );
}

export default App;
