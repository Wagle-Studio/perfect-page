import "./callout.scss";

export type CalloutProps = {
  key: number;
  content: string;
  callout_icon: string;
};

export function Callout(props: CalloutProps) {
  return (
    <div key={props.key} className="callout">
      <span className="callout__icon">{props.callout_icon}</span>
      <p className="callout__content">{props.content}</p>
    </div>
  );
}
