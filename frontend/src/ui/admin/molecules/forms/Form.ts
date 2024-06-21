import { FieldValues, SubmitHandler } from "react-hook-form";

export type Form<T extends FieldValues> = {
  defaultValues: T;
  onSubmit: SubmitHandler<T>;
};
