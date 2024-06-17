import { IntegrationKeyForm } from "@/ui/admin/forms/IntegrationKeyForm";
import { Link } from "@/ui/admin/components/atoms/link/Link";
import { KeyIcon } from "@/ui/admin/components/atoms/icons/KeyIcon";
import "./integration_key_card.scss";

export function IntegrationKeyCard() {
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
          <p>Your data's security and privacy are our top priorities</p>
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
          <IntegrationKeyForm />
        </div>
      </div>
    </div>
  );
}
