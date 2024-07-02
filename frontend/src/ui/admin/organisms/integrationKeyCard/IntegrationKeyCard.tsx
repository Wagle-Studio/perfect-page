"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Settings, User } from "@prisma/client";
import { BotUserObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import classNames from "classnames";
import { usePost } from "@/cdn/hooks/usePost";
import { usePut } from "@/cdn/hooks/usePut";
import {
  IntegrationKeyForm,
  IntegrationKeyFormSchema,
} from "@/ui/admin/molecules/forms/IntegrationKeyForm";
import { Loader } from "@/ui/admin/atoms/loader/Loader";
import { Link } from "@/ui/admin/atoms/link/Link";
import { KeyIcon } from "@/ui/admin/atoms/icons/KeyIcon";
import { Card } from "@/ui/admin/atoms/card/Card";
import { toaster } from "@/ui/admin/atoms/toast/toaster";
import "./integration_key_card.scss";

type IntegrationKeyCardProps = {
  variant: "welcome" | "admin";
  user: User & { Settings: Settings | null };
};

export function IntegrationKeyCard(props: IntegrationKeyCardProps) {
  const router = useRouter();
  const { data: session, status } = useSession();
  let integrationKeyHolder: string | undefined;

  const integrationKeyCardClasses = classNames(
    "admin__integration-key-card__body",
    `admin__integration-key-card__body--${props.variant}`
  );

  const integrationKeyFormDefaultValues: IntegrationKeyFormSchema = {
    integrationKey: "",
  };

  const testIntegrationKey = usePost<BotUserObjectResponse | null>({
    url: "/api/admin/user/integration_key",
    onSuccess: async (res) => {
      toaster.success({
        title: "Integration key",
        message: "Test succeeded",
      });

      if (props.user.Settings && props.user.Settings.userId) {
        await updateUserSettings.send({
          userId: props.user.Settings?.userId,
          integrationKey: integrationKeyHolder,
        });
      } else {
        await createUserSettings.send({
          userEmail: session?.user.email,
          integrationKey: integrationKeyHolder,
        });
      }
    },
    onError: () => {
      toaster.error({
        title: "Integration key",
        message: "Test failed",
      });
    },
  });

  const createUserSettings = usePost<
    (User & { Settings: Settings | null }) | null
  >({
    url: "/api/admin/user/settings",
    onSuccess: (res) => {
      toaster.success({
        title: "Integration key",
        message: "Registered with success",
      });
      router.refresh();
    },
    onError: () => {
      toaster.error({
        title: "Integration key",
        message: "Registration failed",
      });
    },
  });

  const updateUserSettings = usePut<Settings | null>({
    url: "/api/admin/user/settings",
    onSuccess: (res) => {
      toaster.success({
        title: "Integration key",
        message: "Registered with success",
      });
      router.refresh();
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

    await testIntegrationKey.send({
      integrationKey: fieldValues.integrationKey,
    });
  }

  const CardSubtitles = (
    <>
      <p>
        This integration enables interaction between Perfect Page and Notion,
        allowing you to access the pages you choose to share effortlessly
      </p>
      <p>
        Your data's security and privacy are our top priorities,{" "}
        <Link variant="inline" href="#">
          read more
        </Link>
      </p>
    </>
  );

  return (
    <Card
      title={
        props.variant === "welcome" ? (
          <h1>Notion integration</h1>
        ) : (
          <h2>Notion integration</h2>
        )
      }
      icon={<KeyIcon size="large" />}
      subtitles={props.variant === "welcome" ? CardSubtitles : undefined}
      className={integrationKeyCardClasses}
    >
      {props.variant === "welcome" && (
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
      )}
      <div className="admin__integration-key-card__body__form">
        {(!testIntegrationKey.loading || !createUserSettings) && (
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
          </>
        )}
        {(testIntegrationKey.loading || createUserSettings.loading) && (
          <Loader />
        )}
      </div>
    </Card>
  );
}
