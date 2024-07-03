"use client";

import { useForm } from "react-hook-form";
import { object, ObjectSchema, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "@/ui/admin/molecules/forms/Form";
import { Button } from "@/ui/admin/atoms/button/Button";
import { FormFieldText } from "@/ui/admin/atoms/formFields/FormFieldText";
import "./page_form.scss";

export type PageFormSchema = {
  pageId: string;
  title: string;
};

export function PageForm(props: Form<PageFormSchema>) {
  const schema: ObjectSchema<PageFormSchema> = object({
    pageId: string()
      .min(10, "Minimum 10 characters")
      .max(50, "Maximum 50 characters")
      .required("Required field"),
    title: string()
      .min(10, "Minimum 10 characters")
      .max(50, "Maximum 50 characters")
      .required("Required field"),
  });

  const form = useForm<PageFormSchema>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: props.defaultValues,
  });

  return (
    <form className="admin__form__page">
      <FormFieldText
        label="The ID of the page you want to magnify :"
        name="pageId"
        control={form.control}
        placeholder="e8b7a9f47d20485b8c4a1b37e7d1c482"
        error={form.formState.errors.pageId?.message}
        required
      />
      <FormFieldText
        label="Title :"
        name="title"
        control={form.control}
        placeholder="My awesome page"
        error={form.formState.errors.title?.message}
        required
      />
      <div className="admin__form__integration-key__actions">
        <Button
          severity="secondary"
          onClick={form.handleSubmit(props.onSubmit)}
        >
          Register page
        </Button>
        <Button severity="primary" onClick={form.handleSubmit(props.onSubmit)}>
          Quit
        </Button>
      </div>
    </form>
  );
}
