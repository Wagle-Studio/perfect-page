export type QuoteProps = {
  key: number;
  content: string;
};

export function Quote(props: QuoteProps) {
  return <blockquote key={props.key}>{props.content}</blockquote>;
}
