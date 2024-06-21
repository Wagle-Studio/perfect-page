"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Settings, User } from "@prisma/client";
import { BotUserObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { usePost } from "@/cdn/hooks/usePost";
import {
  IntegrationKeyForm,
  IntegrationKeyFormSchema,
} from "@/ui/admin/forms/IntegrationKeyForm";
import { Loader } from "@/ui/admin/atoms/loader/Loader";
import { KeyIcon } from "@/ui/admin/atoms/icons/KeyIcon";
import { toaster } from "@/ui/admin/components/atoms/toast/toaster";
import "./integration_key_card.scss";

import { Link } from "@/ui/admin/atoms/link/Link";

export function IntegrationKeyCard() {
  const router = useRouter();
  const { data: session, status } = useSession();
  let integrationKeyHolder: string | undefined;

  const integrationKeyFormDefaultValues: IntegrationKeyFormSchema = {
    integrationKey: "",
  };

  const testIntegrationKeyPost = usePost<BotUserObjectResponse>({
    url: "/api/admin/user/integration_key",
    onSuccess: async (res) => {
      toaster.success({
        title: "Integration key",
        message: "Test succeeded",
      });

      await integrationKeyPost.send({
        userEmail: session?.user.email,
        integrationKey: integrationKeyHolder,
      });
    },
    onError: () => {
      toaster.error({
        title: "Integration key",
        message: "Test failed",
      });
    },
  });

  const integrationKeyPost = usePost<User & { Settings: Settings | null }>({
    url: "/api/admin/user/settings",
    onSuccess: (res) => {
      toaster.success({
        title: "Integration key",
        message: "Registered with success",
      });
    },
    onError: () => {
      toaster.error({
        title: "Integration key",
        message: "Registration failed",
      });
    },
  });

  async function handleFormSubmit(fieldValues: IntegrationKeyFormSchema) {
    integrationKeyHolder = fieldValues.integrationKey;

    await testIntegrationKeyPost.send({
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
          {(!testIntegrationKeyPost.loading || !integrationKeyPost) && (
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
              {testIntegrationKeyPost.error && (
                <p className="admin__integration-key-card__body__form__error">
                  It appears that the provided key is not recognized by Notion
                </p>
              )}
              {integrationKeyPost.error && (
                <p className="admin__integration-key-card__body__form__error">
                  We're sorry, an error occurred while registering your
                  integration key
                </p>
              )}
            </>
          )}
          {(testIntegrationKeyPost.loading || integrationKeyPost.loading) && (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
}
