"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { object, ObjectSchema, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/ui/admin/components/atoms/button/Button";
import { FormFieldPassword } from "@/ui/admin/components/atoms/formFields/FormFieldPassword";
import "./integration_key_form.scss";

export type IntegrationKeyFormSchema = {
  integration_key: string;
};

type FormHandler<T extends FieldValues> = {
  defaultValues: T;
  onSubmit: SubmitHandler<T>;
};

export function IntegrationKeyForm(
  props: FormHandler<IntegrationKeyFormSchema>
) {
  const schema: ObjectSchema<IntegrationKeyFormSchema> = object({
    integration_key: string()
      .min(10, "Minimum 10 characters")
      .max(50, "Maximum 50 characters")
      .required("Required field"),
  });

  const form = useForm<IntegrationKeyFormSchema>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: props.defaultValues,
  });

  return (
    <form className="admin__form__integration-key">
      <div>
        <FormFieldPassword
          label="Your integration secret key :"
          name="integration_key"
          control={form.control}
          placeholder="Your Notion integration key here"
          error={form.formState.errors.integration_key?.message}
          required
          showButton
        />
      </div>
      <div className="admin__form__integration-key__actions">
        <Button severity="black" onClick={form.handleSubmit(props.onSubmit)}>
          Register key
        </Button>
      </div>
    </form>
  );
}
