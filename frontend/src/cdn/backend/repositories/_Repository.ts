import { PrismaClient } from "@prisma/client";

export class Repository {
  protected client: PrismaClient;

  public constructor() {
    this.client = new PrismaClient();
  }
}
