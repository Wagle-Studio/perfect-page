import { ApiController } from "@/cdn/backend/controllers/_ApiController";
import { UserRepository } from "@/cdn/backend/repositories/UserRepository";

export class UserController extends ApiController {
  protected entity = "user";

  public constructor(request: Request) {
    super(request);
  }

  public async createUserSettings() {
    enum MandatoryFields {
      "USER_EMAIL" = "userEmail",
      "INTEGRATION_KEY" = "integrationKey",
    }

    try {
      const res = await this.request.json();

      if (!this.hasMandatoryFields(MandatoryFields, res)) {
        return this.resBadRequestError();
      }

      const userRepository = new UserRepository();
      const user = await userRepository.createSettings(
        res.userEmail,
        res.integrationKey
      );

      if (!user) {
        return this.resNotFoundError();
      }

      if (!user.Settings) {
        return this.resUnprocessableEntityError();
      }

      return this.resCreatedSuccess(user);
    } catch (error) {
      console.log(error);
      return this.resInternalServerError();
    }
  }
}
