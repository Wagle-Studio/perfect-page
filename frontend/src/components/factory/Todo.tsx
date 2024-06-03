import "./todo.css";

export type TodoProps = {
  key: number;
  content: string;
  todo_check: boolean;
};

export function Todo(props: TodoProps) {
  return (
    <div key={props.key} className="todo_container">
      <label className={props.todo_check ? "checked" : ""}>
        <input type="checkbox" checked={props.todo_check} readOnly />
      </label>
      <p>{props.content}</p>
    </div>
  );
}
