"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { object, ObjectSchema, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { slugify } from "@/cdn/libs/slugify";
import { Form } from "@/ui/admin/molecules/forms/Form";
import { Button } from "@/ui/admin/atoms/button/Button";
import { FormFieldText } from "@/ui/admin/atoms/formFields/FormFieldText";
import "./page_form.scss";

export type PageFormSchema = {
  pageId: string;
  title: string;
  slug: string;
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
    slug: string()
      .min(10, "Minimum 10 characters")
      .max(50, "Maximum 50 characters")
      .required("Required field"),
  });

  const form = useForm<PageFormSchema>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: props.defaultValues,
  });

  const titleWatcher = form.watch("title");

  useEffect(() => {
    if (titleWatcher && titleWatcher.length > 0) {
      form.setValue("slug", slugify(titleWatcher));
    }
  }, [titleWatcher]);

  return (
    <form className="admin__form__page">
      <div className="admin__form__page__fields-wrapper">
        <FormFieldText
          label="ID of the Notion page"
          name="pageId"
          control={form.control}
          placeholder="e8b7a9f47d20485b8c4a1b37e7d1c482"
          error={form.formState.errors.pageId?.message}
          required
        />
      </div>
      <div className="admin__form__page__fields-wrapper admin__form__page__fields-wrapper--horizontal">
        <FormFieldText
          label="Title"
          name="title"
          control={form.control}
          placeholder="My awesome page"
          error={form.formState.errors.title?.message}
          required
        />
        <FormFieldText
          label="Slug"
          name="slug"
          control={form.control}
          placeholder="my-awesome-page"
          error={form.formState.errors.slug?.message}
          required
          readOnly
        />
      </div>
      <div className="admin__form__page__actions">
        <Button
          severity="secondary"
          onClick={form.handleSubmit(props.onSubmit)}
          disabled={!form.formState.isDirty}
        >
          Save page
        </Button>
      </div>
    </form>
  );
}
