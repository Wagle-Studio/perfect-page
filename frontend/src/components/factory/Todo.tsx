export type TodoProps = {
  key: number;
  content: string;
  todo_check: boolean;
};

export function Todo(props: TodoProps) {
  return <p key={props.key}>{props.todo_check + " - " + props.content}</p>;
}
