"use client";

import { useRouter } from "next/navigation";
import { Pages, User } from "@prisma/client";
import { usePost } from "@/cdn/hooks/usePost";
import { usePut } from "@/cdn/hooks/usePut";
import {
  PageForm,
  PageFormSchema,
} from "@/ui/admin/molecules/forms/page/PageForm";
import { Loader } from "@/ui/admin/atoms/loader/Loader";
import { Card } from "@/ui/admin/atoms/card/Card";
import { PageIcon } from "@/ui/admin/atoms/icons/PageIcon";
import { toaster } from "@/ui/admin/atoms/toast/toaster";

type PageCardProps = {
  user: User;
  page?: Pages;
};

export function PageCard(props: PageCardProps) {
  const router = useRouter();

  const pageFormDefaultValues: PageFormSchema = {
    pageId: props.page ? props.page.page_id : "",
    title: props.page ? props.page.title : "",
  };

  const createPage = usePost<Pages | null>({
    url: "/api/admin/pages",
    onSuccess: (res) => {
      toaster.success({
        title: "Page",
        message: "Registered with success",
      });
      router.push("/dashboard/pages");
    },
    onError: () => {
      toaster.error({
        title: "Page",
        message: "Registration failed",
      });
    },
  });

  const updatePage = usePut<Pages | null>({
    url: "/api/admin/pages",
    onSuccess: (res) => {
      toaster.success({
        title: "Page",
        message: "Updated with success",
      });
      router.push("/dashboard/pages");
    },
    onError: () => {
      toaster.error({
        title: "Page",
        message: "Failed to update",
      });
    },
  });

  async function handleFormSubmit(fieldValues: PageFormSchema) {
    if (props.page) {
      updatePage.send({
        id: props.page.id,
        pageId: fieldValues.pageId,
        title: fieldValues.title,
      });
    } else {
      createPage.send({
        userId: props.user.id,
        pageId: fieldValues.pageId,
        title: fieldValues.title,
      });
    }
  }

  return (
    <Card
      title={<h2>{props.page ? "Edit page" : "Register page"}</h2>}
      icon={<PageIcon size="large" />}
      className="admin__page-card__body"
    >
      <div className="admin__page-card__body__form">
        {!createPage.loading && (
          <PageForm
            defaultValues={pageFormDefaultValues}
            onSubmit={handleFormSubmit}
          />
        )}
        {createPage.loading && <Loader />}
      </div>
    </Card>
  );
}
