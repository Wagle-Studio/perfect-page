import { Client } from "@notionhq/client";
import { ApiController } from "@/cdn/backend/controllers/_ApiController";

export class IntegrationKeyController extends ApiController {
  protected entity = "user";

  public constructor(request: Request) {
    super(request);
  }

  public async testIntegrationKey() {
    enum MandatoryFields {
      "INTEGRATION_KEY" = "integrationKey",
    }

    try {
      const res = await this.request.json();

      if (!this.hasMandatoryFields(MandatoryFields, res)) {
        return this.resBadRequestError();
      }

      const notion = new Client({
        auth: res.integrationKey,
      });

      const user = await notion.users.me({});

      if (!user) {
        return this.resNotFoundError();
      }

      return this.resCreatedSuccess(user);
    } catch (error) {
      console.log(error);
      return this.resInternalServerError();
    }
  }
}
