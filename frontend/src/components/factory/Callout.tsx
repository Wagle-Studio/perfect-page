export type CalloutProps = {
  key: number;
  content: string;
  callout_icon: string;
};

export function Callout(props: CalloutProps) {
  console.log(props);

  return (
    <div key={props.key}>
      {props.callout_icon} {props.content}
    </div>
  );
}
