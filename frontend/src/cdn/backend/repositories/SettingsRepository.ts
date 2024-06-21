import { Settings } from "@prisma/client";
import { Repository } from "@/cdn/backend/repositories/_Repository";

export class SettingsRepository extends Repository {
  public constructor() {
    super();
  }

  public async updateSettings(
    userId?: string | null,
    integrationKey?: string | null
  ): Promise<Settings | null> {
    if (userId && integrationKey) {
      return await this.client.settings.update({
        where: { userId },
        data: {
          userId,
          integration_key: integrationKey,
        },
      });
    } else {
      return null;
    }
  }
}
