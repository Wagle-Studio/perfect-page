import { Settings } from "@prisma/client";
import { Repository } from "./_Repository";

export class SettingsRepository extends Repository {
  public constructor() {
    super();
  }

  public async createSettings(settings: any): Promise<Settings> {
    return await this.client.settings.create({
      data: { ...settings },
    });
  }
}
