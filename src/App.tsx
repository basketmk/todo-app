import { useEffect, useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import { Todo } from "./component/Todo";

type TodoItem = {
  id: string;
  title: string;
  isCompleted: boolean;
};

const STORAGE_KEY = "todos_v1";

function App() {
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored) as TodoItem[];
  });
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  const deleteTodo = (id: string) => {
    if (!confirm("Sure?")) {
      return;
    }
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
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
        key={todo.id}
        title={todo.title}
        isCompleted={todo.isCompleted}
        onToggle={() => toggleTodo(index)}
        onDelete={() => deleteTodo(index)}
      />
    );
  });

  type FormValues = {
    title: string;
  };

  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    //ここのonSubmitはただの自分の関数（極論なんでもいい）
    const title = data.title.trim();
    if (!title) return;
    const newTodo: TodoItem = {
      id: crypto.randomUUID(),
      title,
      isCompleted: false,
    };
    setTodos((prev) => [...prev, newTodo]);
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
