import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-5 max-w-xl mx-auto">
      <div className="flex items-center justify-between gap-4 border-b-1 pb-3">
        <h1 className="text-5xl font-bold">Todos</h1>
        <button className="border bg-gray-200 cursor-pointer w-15 h-7">
          Purge
        </button>
      </div>
      <ul className="flex items-center m-4">
        <li className="flex items-centers justify-between w-full items-start gap-3">
          <label className="flex items-center gap-3 flex-1 min-w-0">
            <input type="checkbox" />
            <div className="break-all">
              aaassssssssssssssssssswwwwwwwswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwss
            </div>
          </label>
          <button className="border bg-gray-200 cursor-pointer flex-none w-6 h-6 flex items-center justify-center">
            ×
          </button>
        </li>
      </ul>
      <ul className="flex items-center m-4">
        <li className="flex items-center justify-between w-full">
          <label className="flex items-center justify-center gap-3">
            <input type="checkbox" />
            aaa
          </label>
          <button className="border bg-gray-200 cursor-pointer flex-none w-6 h-6 flex items-center justify-center">
            ×
          </button>
        </li>
      </ul>
      <form className="flex items-center gap-3">
        <input type="text" className="border flex-1" />
        <button className="border bg-gray-200 cursor-pointer pl-1 pr-1">
          Add
        </button>
      </form>
    </div>
  );
}

export default App;
