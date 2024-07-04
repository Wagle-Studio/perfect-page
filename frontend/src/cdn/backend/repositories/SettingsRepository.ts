import { Settings } from "@prisma/client";
import { Repository } from "@/cdn/backend/repositories/_Repository";

export class SettingsRepository extends Repository {
  public constructor() {
    super();
  }

  public async getSettings(
    userEmail?: string | null
  ): Promise<Settings | null> {
    if (userEmail) {
      return await this.client.settings.findFirst({
        where: {
          user: {
            email: userEmail,
          },
        },
      });
    } else {
      return null;
    }
  }

  public async createSettings(
    userId?: string | null,
    integrationKey?: string | null
  ): Promise<Settings | null> {
    if (userId && integrationKey) {
      return await this.client.settings.create({
        data: {
          userId: userId,
          integrationKey: integrationKey,
        },
      });
    } else {
      return null;
    }
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
          integrationKey: integrationKey,
        },
      });
    } else {
      return null;
    }
  }
}
