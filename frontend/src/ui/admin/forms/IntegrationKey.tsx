"use client";

import { useState } from "react";
import { Button } from "@/ui/admin/components/button/Button";
import { EyeOpenIcon } from "@/ui/admin/components/icons/EyeOpenIcon";
import { EyeCloseIcon } from "@/ui/admin/components/icons/EyeCloseIcon";
import "./integration_key.scss";

export function IntegrationKey() {
  const [showKey, setShowKey] = useState<boolean>(false);

  const handleShowKeyClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowKey(!showKey);
  };

  return (
    <form className="admin__form__integration-key">
      <div className="admin__form__integration-key__field">
        <label
          htmlFor="integration_key"
          className="admin__form__integration-key__field__label"
        >
          Your integration secret key :
        </label>
        <div>
          <input
            className="admin__form__integration-key__field__input"
            type={showKey ? "text" : "password"}
            name="integration_key"
            id="integration_key"
            placeholder={
              showKey
                ? "Your Notion integration key here"
                : "***********************************************"
            }
          />
          <Button onClick={handleShowKeyClick}>
            {showKey && <EyeCloseIcon size="small" />}
            {!showKey && <EyeOpenIcon size="small" />}
          </Button>
        </div>
      </div>
      <div className="admin__form__integration-key__actions">
        <Button severity="black">Register key</Button>
      </div>
    </form>
  );
}
