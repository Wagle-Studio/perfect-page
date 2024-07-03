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
import { Link } from "@/ui/admin/atoms/link/Link";
import { Card } from "@/ui/admin/atoms/card/Card";
import { PageIcon } from "@/ui/admin/atoms/icons/PageIcon";
import { toaster } from "@/ui/admin/atoms/toast/toaster";

type PageCardProps = {
  user: User;
};

export function PageCard(props: PageCardProps) {
  const router = useRouter();

  const pageFormDefaultValues: PageFormSchema = {
    pageId: "",
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
        message: "Registration failder",
      });
    },
  });

  async function handleFormSubmit(fieldValues: PageFormSchema) {
    createPage.send({
      pageId: fieldValues.pageId,
      userId: props.user.id,
    });
  }

  return (
    <Card
      title={<h2>Register page</h2>}
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
