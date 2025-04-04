"use client";

import { useState } from "react";
import { Controller, FieldValues } from "react-hook-form";
import classNames from "classnames";
import { EyeCloseIcon } from "@/ui/admin/atoms/icons/EyeCloseIcon";
import { EyeOpenIcon } from "@/ui/admin/atoms/icons/EyeOpenIcon";
import "./form_field.scss";

import { Button } from "@/ui/admin/atoms/button/Button";
import { FormField } from "./FormField";

type FormFieldPassword<T extends FieldValues> = FormField<T>;

export function FormFieldPassword<T extends FieldValues>(
  props: FormFieldPassword<T>
) {
  const [showKey, setShowKey] = useState<boolean>(false);

  const inputWrapperClasses = classNames(
    "admin__form-field admin__form-field--vertical",
    props.className
  );

  const inputClasses = classNames("admin__form-field__wrapper__input", {
    [`admin__form-field__wrapper__input--error`]: props.error,
    [`admin__form-field__wrapper__input--read-only`]: props.readOnly,
  });

  const handleShowKeyClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowKey(!showKey);
  };

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
              type={showKey ? "text" : "password"}
              id={props.name}
              placeholder={
                showKey ? props.placeholder ?? "" : "****************"
              }
              readOnly={props.readOnly ?? false}
              aria-readonly={props.readOnly ?? false}
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
          <Button severity="primary" onClick={handleShowKeyClick}>
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
