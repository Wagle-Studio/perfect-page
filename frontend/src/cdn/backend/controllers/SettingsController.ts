import { ApiController } from "@/cdn/backend/controllers/_ApiController";
import { SettingsRepository } from "@/cdn/backend/repositories/SettingsRepository";

export class SettingsController extends ApiController {
  protected entity = "settings";

  public constructor(request: Request) {
    super(request);
  }

  public async createSettings() {
    enum MandatoryFields {
      "USER_ID" = "userId",
      "INTEGRATION_KEY" = "integrationKey",
    }

    try {
      const res = await this.request.json();

      if (!this.hasMandatoryFields(MandatoryFields, res)) {
        return this.resBadRequestError();
      }

      const settingsRepository = new SettingsRepository();
      const settings = await settingsRepository.createSettings(
        res.userId,
        res.integrationKey
      );

      if (!settings) {
        return this.resNotFoundError();
      }

      return this.resCreatedSuccess(settings);
    } catch (error) {
      console.log(error);
      return this.resInternalServerError();
    }
  }

  public async updateSettings() {
    enum MandatoryFields {
      "USER_ID" = "userId",
      "INTEGRATION_KEY" = "integrationKey",
    }

    try {
      const res = await this.request.json();

      if (!this.hasMandatoryFields(MandatoryFields, res)) {
        return this.resBadRequestError();
      }

      const settingsRepository = new SettingsRepository();
      const settings = await settingsRepository.updateSettings(
        res.userId,
        res.integrationKey
      );

      if (!settings) {
        return this.resNotFoundError();
      }

      return this.resCreatedSuccess(settings);
    } catch (error) {
      console.log(error);
      return this.resInternalServerError();
    }
  }
}
