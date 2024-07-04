"use client";

import { useRouter } from "next/navigation";
import { Settings, User } from "@prisma/client";
import { BotUserObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import classNames from "classnames";
import { usePost } from "@/cdn/hooks/usePost";
import { usePut } from "@/cdn/hooks/usePut";
import {
  IntegrationKeyForm,
  IntegrationKeyFormSchema,
} from "@/ui/admin/molecules/forms/integrationKey/IntegrationKeyForm";
import { Loader } from "@/ui/admin/atoms/loader/Loader";
import { Link } from "@/ui/admin/atoms/link/Link";
import { KeyIcon } from "@/ui/admin/atoms/icons/KeyIcon";
import { Card } from "@/ui/admin/atoms/card/Card";
import { toaster } from "@/ui/admin/atoms/toast/toaster";
import "./integration_key_card_form.scss";

type IntegrationKeyCardFormProps = {
  variant: "welcome" | "admin";
  user: User;
  settings: Settings | null;
};

export function IntegrationKeyCardForm(props: IntegrationKeyCardFormProps) {
  const router = useRouter();
  let integrationKeyHolder: string | undefined;

  const integrationKeyCardClasses = classNames(
    "admin__integration-key-card__body",
    `admin__integration-key-card__body--${props.variant}`
  );

  const integrationKeyFormDefaultValues: IntegrationKeyFormSchema = {
    integrationKey: "",
  };

  const testIntegrationKey = usePost<BotUserObjectResponse | null>({
    url: "/api/admin/integration_key",
    onSuccess: async (res) => {
      toaster.success({
        title: "Integration key",
        message: "Test succeeded",
      });

      if (props.settings) {
        await updateUserSettings.send({
          userId: props.user.id,
          integrationKey: integrationKeyHolder,
        });
      } else {
        await createUserSettings.send({
          userId: props.user.id,
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

  const createUserSettings = usePost<Settings | null>({
    url: "/api/admin/settings",
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
    url: "/api/admin/settings",
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

  const CardTitle = (
    <>
      {props.variant === "welcome" ? (
        <h1>Notion integration</h1>
      ) : (
        <h2>Notion integration</h2>
      )}
    </>
  );

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
      title={CardTitle}
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
        {testIntegrationKey.error && (
          <p
            className={`admin__integration-key-card__body__form__error admin__integration-key-card__body__form__error--${props.variant}`}
          >
            It's appears that the provided key is not recognized by Notion
          </p>
        )}
        {(createUserSettings.error || updateUserSettings.error) && (
          <p
            className={`admin__integration-key-card__body__form__error admin__integration-key-card__body__form__error--${props.variant}`}
          >
            We're sorry, an error occurred while registering your integration
            key
          </p>
        )}
        {!testIntegrationKey.loading &&
          !createUserSettings.loading &&
          !updateUserSettings.loading && (
            <IntegrationKeyForm
              defaultValues={integrationKeyFormDefaultValues}
              onSubmit={handleFormSubmit}
            />
          )}
        {(testIntegrationKey.loading ||
          createUserSettings.loading ||
          updateUserSettings.loading) && <Loader />}
      </div>
    </Card>
  );
}
