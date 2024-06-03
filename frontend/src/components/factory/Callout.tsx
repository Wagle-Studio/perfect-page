import "./callout.css";

export type CalloutProps = {
  key: number;
  content: string;
  callout_icon: string;
};

export function Callout(props: CalloutProps) {
  return (
    <div key={props.key} className="callout_container">
      <span>{props.callout_icon}</span>
      <p>{props.content}</p>
    </div>
  );
}
