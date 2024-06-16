import { Settings } from "@prisma/client";
import { Repository } from "./_Repository";

export class UserRepository extends Repository {
  public constructor() {
    super();
  }

  public async getUserSettings(
    email?: string | null
  ): Promise<Settings | undefined | null> {
    if (email) {
      const res = await this.client.user.findUnique({
        where: {
          email: email,
        },
        include: {
          Settings: true,
        },
      });

      return res?.Settings;
    } else {
      return null;
    }
  }
}
