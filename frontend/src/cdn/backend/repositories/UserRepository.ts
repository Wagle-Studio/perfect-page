import { User, Settings } from "@prisma/client";
import { Repository } from "@/cdn/backend/repositories/_Repository";

export class UserRepository extends Repository {
  public constructor() {
    super();
  }

  public async getSettings(
    email?: string | null
  ): Promise<(User & { Settings: Settings | null }) | null> {
    if (email) {
      return await this.client.user.findUnique({
        where: { email },
        include: {
          Settings: true,
        },
      });
    } else {
      return null;
    }
  }

  public async createSettings(
    email?: string | null,
    integrationKey?: string | null
  ): Promise<(User & { Settings: Settings | null }) | null> {
    if (email && integrationKey) {
      return await this.client.user.update({
        where: { email },
        data: {
          Settings: {
            create: {
              integration_key: integrationKey,
            },
          },
        },
        include: {
          Settings: true,
        },
      });
    } else {
      return null;
    }
  }
}
