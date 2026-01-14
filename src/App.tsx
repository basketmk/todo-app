import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen pt-5">
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-5xl font-bold">Todos</h1>
        <button className="border bg-gray-200 cursor-pointer w-15 h-8">
          Purge
        </button>
      </div>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            aaa
          </label>
          <button className="border bg-gray-200 cursor-pointer">×</button>
        </li>
      </ul>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            aaa
          </label>
          <button className="border bg-gray-200 cursor-pointer">×</button>
        </li>
      </ul>
      <form>
        <input type="text" className="border" />
        <button className="border bg-gray-200 cursor-pointer">Add</button>
      </form>
    </div>
  );
}

export default App;
