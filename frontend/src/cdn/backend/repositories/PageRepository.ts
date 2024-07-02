import { Pages } from "@prisma/client";
import { Repository } from "@/cdn/backend/repositories/_Repository";

export class PageRepository extends Repository {
  public constructor() {
    super();
  }

  public async createPage(
    pageId?: string | null,
    userId?: string | null
  ): Promise<{ userId: string; pageId: string } | null> {
    if (pageId && userId) {
      return await this.client.userPages.create({
        data: {
          page: {
            connectOrCreate: {
              where: { id: pageId },
              create: { page_id: pageId },
            },
          },
          user: {
            connect: { id: userId },
          },
        },
      });
    } else {
      return null;
    }
  }
}
