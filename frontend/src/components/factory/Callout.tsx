export type CalloutProps = {
  key: number;
  content: string;
};

export function Callout(props: CalloutProps) {
  return <div key={props.key}>{props.content}</div>;
}
