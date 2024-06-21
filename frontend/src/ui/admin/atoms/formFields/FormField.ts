import { HTMLAttributes } from "react";
import { Control, FieldValues, Path } from "react-hook-form";

export type FormField<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  control: Control<T>;
  required: boolean;
  placeholder?: string;
  error?: string;
  help?: string;
  showButton?: boolean;
} & HTMLAttributes<HTMLElement>;
