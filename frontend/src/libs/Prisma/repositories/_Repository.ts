import { PrismaClient } from "@prisma/client";

export abstract class Repository {
  protected client: PrismaClient;

  public constructor() {
    this.client = new PrismaClient();
  }
}
