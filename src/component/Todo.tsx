export const Todo = (props) => {
  return (
    <ul className="flex m-2">
      <li className="flex justify-between w-full items-center gap-3">
        <label className="flex gap-3 min-w-0 flex-1 border rounded p-3">
          <input
            type="checkbox"
            checked={props.isCompleted}
            onChange={props.onToggle}
          />
          <span
            className={`break-all ${
              props.isCompleted ? "line-through text-gray-600" : ""
            }`}
          >
            {props.title}
          </span>
        </label>
        <button
          onClick={props.onDelete}
          className="cursor-pointer w-6 h-6 flex items-center justify-center rounded hover:bg-gray-300"
        >
          ×
        </button>
      </li>
    </ul>
  );
};
