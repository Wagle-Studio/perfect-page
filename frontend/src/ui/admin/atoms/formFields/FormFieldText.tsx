"use client";

import { Controller, FieldValues } from "react-hook-form";
import classNames from "classnames";
import { FormField } from "./FormField";
import "./form_field.scss";

type FormFieldText<T extends FieldValues> = FormField<T>;

export function FormFieldText<T extends FieldValues>(props: FormFieldText<T>) {
  const inputWrapperClasses = classNames("admin__form-field", props.className);
  const inputClasses = classNames("admin__form-field__wrapper__input", {
    [`admin__form-field__wrapper__input--error`]: props.error,
  });

  return (
    <div className={inputWrapperClasses}>
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
              type="text"
              id={props.name}
              placeholder={props.placeholder}
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
