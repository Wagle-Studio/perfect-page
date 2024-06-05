import "./todo.scss";

export type TodoProps = {
  key: number;
  content: string;
  todo_check: boolean;
};

export function Todo(props: TodoProps) {
  return (
    <div key={props.key} className="to_do">
      <label
        className={`to_do__label to_do__label--${
          props.todo_check ? "checked" : "unchecked"
        }`}
      >
        <input
          className="to_do__label__input"
          type="checkbox"
          checked={props.todo_check}
          readOnly
        />
      </label>

      <p className="to_do__content">{props.content}</p>
    </div>
  );
}
