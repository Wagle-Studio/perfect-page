"use client"

import { useState } from "react";
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import classNames from "classnames";
import { Button } from "@/ui/admin/components/atoms/button/Button";
import { EyeCloseIcon } from "@/ui/admin/components/atoms/icons/EyeCloseIcon";
import { EyeOpenIcon } from "@/ui/admin/components/atoms/icons/EyeOpenIcon";
import "./form_field.scss";

type FormField<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  control: Control<T>;
  required: boolean;
  placeholder?: string;
  error: FieldError["message"] | undefined;
  help?: string;
  showButton?: boolean;
};

type FormFieldPassword<T extends FieldValues> = FormField<T>;

export function FormFieldPassword<T extends FieldValues>(
  props: FormFieldPassword<T>
) {
  const [showKey, setShowKey] = useState<boolean>(false);

  const inputClasses = classNames("admin__form-field__wrapper__input", {
    [`admin__form-field__wrapper__input--error`]: props.error,
  });

  const handleShowKeyClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowKey(!showKey);
  };

  return (
    <div className="admin__form-field">
      <label className="admin__form-field__label" htmlFor={props.name}>
        {props.label}
      </label>
      <div className="admin__form-field__wrapper">
        <Controller
          name={props.name}
          control={props.control}
          render={({ field }) => (
            <input
              className={inputClasses}
              type={showKey ? "text" : "password"}
              id={props.name}
              placeholder={
                showKey ? props.placeholder ?? "" : "****************"
              }
              aria-required={props.required}
              aria-invalid={!!props.error}
              aria-describedby={
                (props.error ? `${props.name}-error` : "") +
                (props.error && props.help ? " " : "") +
                (props.help ? `${props.name}-format` : "")
              }
              {...field}
            />
          )}
        />
        {props.showButton && (
          <Button onClick={handleShowKeyClick}>
            {showKey && <EyeCloseIcon size="small" />}
            {!showKey && <EyeOpenIcon size="small" />}
          </Button>
        )}
      </div>
      <div className="admin__form-field__messages">
        {props.help && (
          <p
            className="admin__form-field__messages__item admin__form-field__messages__item--help"
            id={`${props.name}-format`}
          >
            {props.help}
          </p>
        )}
        {props.error && (
          <p
            className="admin__form-field__messages__item admin__form-field__messages__item--error"
            id={`${props.name}-error`}
          >
            {props.error}
          </p>
        )}
      </div>
    </div>
  );
}
