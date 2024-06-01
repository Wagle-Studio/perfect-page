export type TodoProps = {
  key: number;
  content: string;
};

export function Todo(props: TodoProps) {
  return <p key={props.key}>{props.content}</p>;
}
