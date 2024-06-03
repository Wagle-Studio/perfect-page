import "./quote.css";

export type QuoteProps = {
  key: number;
  content: string;
};

export function Quote(props: QuoteProps) {
  return (
    <blockquote key={props.key} className="quote_container">
      {props.content}
    </blockquote>
  );
}
