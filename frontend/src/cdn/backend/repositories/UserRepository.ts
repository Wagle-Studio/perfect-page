import { User, Settings } from "@prisma/client";
import { Repository } from "@/cdn/backend/repositories/_Repository";

export class UserRepository extends Repository {
  public constructor() {
    super();
  }

  public async getUser(email?: string | null): Promise<User | null> {
    if (email) {
      return await this.client.user.findUnique({
        where: { email },
      });
    } else {
      return null;
    }
  }
}
