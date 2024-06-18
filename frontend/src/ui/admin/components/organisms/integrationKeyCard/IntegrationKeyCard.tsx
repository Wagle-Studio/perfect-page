"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { usePost } from "@/cdn/hooks/usePost";
import {
  IntegrationKeyForm,
  IntegrationKeyFormSchema,
} from "@/ui/admin/forms/IntegrationKeyForm";
import { Loader } from "@/ui/admin/components/atoms/loader/Loader";
import { Link } from "@/ui/admin/components/atoms/link/Link";
import { KeyIcon } from "@/ui/admin/components/atoms/icons/KeyIcon";
import "./integration_key_card.scss";

export function IntegrationKeyCard() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const integrationKeyFormDefaultValues: IntegrationKeyFormSchema = {
    integrationKey: "",
  };

  const integrationKeyPost = usePost({
    url: "/api/admin/user/settings",
    toastTitle: "Integration key",
    onSuccess: () => {
      router.push("/dashboard/pages");
    },
  });

  async function handleFormSubmit(fieldValues: IntegrationKeyFormSchema) {
    integrationKeyPost.send({
      userEmail: session?.user.email,
      integrationKey: fieldValues.integrationKey,
    });
  }

  return (
    <div className="admin__integration-key-card">
      <div className="admin__integration-key-card__header">
        <div className="admin__integration-key-card__header__title">
          <KeyIcon size="large" />
          <h1>Notion integration</h1>
        </div>
        <div className="admin__integration-key-card__header__sub-title">
          <p>
            This integration enables interaction between Perfect Page and
            Notion, allowing you to access the pages you choose to share
            effortlessly
          </p>
          <p>
            Your data's security and privacy are our top priorities,{" "}
            <Link variant="inline" href="#">
              read more
            </Link>
          </p>
        </div>
      </div>
      <div className="admin__integration-key-card__body">
        <div className="admin__integration-key-card__body__guide">
          <div className="admin__integration-key-card__body__guide__step">
            <div>
              <p>
                <span>Step</span>1
              </p>
            </div>
            <p>
              Visit{" "}
              <Link
                variant="inline"
                href="https://www.notion.so/my-integrations"
              >
                https://www.notion.so/my-integrations
              </Link>{" "}
              to create an integration
            </p>
          </div>
          <div className="admin__integration-key-card__body__guide__step">
            <div>
              <p>
                <span>Step</span>2
              </p>
            </div>
            <p>Get your secret key and register it below</p>
          </div>
        </div>
        <div className="admin__integration-key-card__body__form">
          {!integrationKeyPost.loading && (
            <>
              {status === "loading" && <Loader />}
              {status === "unauthenticated" && (
                <p className="admin__integration-key-card__body__form__error">
                  We're sorry, an error occurred while retrieving your data
                </p>
              )}
              {status === "authenticated" && session && (
                <IntegrationKeyForm
                  defaultValues={integrationKeyFormDefaultValues}
                  onSubmit={handleFormSubmit}
                />
              )}
              {integrationKeyPost.error && (
                <p className="admin__integration-key-card__body__form__error">
                  We're sorry, an error occurred while sending your data
                </p>
              )}
            </>
          )}
          {integrationKeyPost.loading && <Loader />}
        </div>
      </div>
    </div>
  );
}
