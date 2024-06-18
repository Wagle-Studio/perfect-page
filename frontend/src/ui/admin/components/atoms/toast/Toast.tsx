import "./toast.scss";

export type ToastProps = {
  title: string;
  message: string;
};

export function Toast(props: ToastProps) {
  return (
    <div className="admin__toast">
      <p className="admin__toast__title">{props.title}</p>
      <p className="admin__toast__message">{props.message}</p>
    </div>
  );
}
