import { BlockConf, NotionTodoData } from "@/types/Block";
import { RichText } from "@/components/factory/RichText";
import "./todo.scss";

export function Todo(props: BlockConf<NotionTodoData>) {
  return (
    <div key={props.key} className="to_do">
      <label
        className={`to_do__label to_do__label--${
          props.data?.checked ? "checked" : "unchecked"
        }`}
      >
        <input
          className="to_do__label__input"
          type="checkbox"
          checked={props.data?.checked}
          readOnly
        />
      </label>

      <p className="to_do__content">
        {props.data?.rich_text.map((rich_text, index) => (
          <RichText key={props.key + "_" + index} content={rich_text} />
        ))}
      </p>
    </div>
  );
}
