"use client";

import { useSession } from "next-auth/react";
import {
  IntegrationKeyForm,
  IntegrationKeyFormSchema,
} from "@/ui/admin/forms/IntegrationKeyForm";
import { toaster } from "@/ui/admin/components/atoms/toast/toaster";
import { Loader } from "@/ui/admin/components/atoms/loader/Loader";
import { Link } from "@/ui/admin/components/atoms/link/Link";
import { KeyIcon } from "@/ui/admin/components/atoms/icons/KeyIcon";
import "./integration_key_card.scss";

export function IntegrationKeyCard() {
  const { data: session, status } = useSession();

  const integrationKeyFormDefaultValues: IntegrationKeyFormSchema = {
    integrationKey: "",
  };

  async function handleFormSubmit(fieldValues: IntegrationKeyFormSchema) {
    const response = await fetch("/api/admin/user/settings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: session?.user.email,
        integrationKey: fieldValues.integrationKey,
      }),
    });

    if (response.ok) {
      await response.json();
      toaster.success({
        title: "Integration key",
        message: "Registered with success",
      });
    } else {
      toaster.error({
        title: "Integration key",
        message: "Registration failed",
      });
    }
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
          {status === "loading" && <Loader />}
          {status === "unauthenticated" && (
            <p className="admin__integration-key-card__body__form_error">
              We're sorry, an error has occurred
            </p>
          )}
          {status === "authenticated" && session && (
            <IntegrationKeyForm
              defaultValues={integrationKeyFormDefaultValues}
              onSubmit={handleFormSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}
