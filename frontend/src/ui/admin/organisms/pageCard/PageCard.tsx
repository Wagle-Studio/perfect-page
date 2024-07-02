"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Pages, Settings, User } from "@prisma/client";
import { BotUserObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import classNames from "classnames";
import { usePost } from "@/cdn/hooks/usePost";
import { usePut } from "@/cdn/hooks/usePut";
import {
  PageForm,
  PageFormSchema,
} from "@/ui/admin/molecules/forms/page/PageForm";
import { Link } from "@/ui/admin/atoms/link/Link";
import { Card } from "@/ui/admin/atoms/card/Card";
import { PageIcon } from "@/ui/admin/atoms/icons/PageIcon";

type PageCardProps = {
  user: User & { Settings: Settings | null };
};

export function PageCard(props: PageCardProps) {
  const { data: session, status } = useSession();

  const pageFormDefaultValues: PageFormSchema = {
    pageId: "",
  };

  const createPage = usePost<Pages>()

  async function handleFormSubmit(fieldValues: PageFormSchema) {
    console.log(fieldValues);
  }

  return (
    <Card
      title={<h2>Register page</h2>}
      icon={<PageIcon size="large" />}
      className="admin__page-card__body"
    >
      <div className="admin__page-card__body__form">
        <PageForm
          defaultValues={pageFormDefaultValues}
          onSubmit={handleFormSubmit}
        />
      </div>
    </Card>
  );
}
