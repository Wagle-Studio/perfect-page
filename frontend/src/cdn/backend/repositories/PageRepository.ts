import { Pages } from "@prisma/client";
import { Repository } from "@/cdn/backend/repositories/_Repository";

export class PageRepository extends Repository {
  public constructor() {
    super();
  }

  public async getPages(userId?: string | null): Promise<Pages[] | null> {
    if (userId) {
      return await this.client.pages.findMany({
        where: {
          UserPages: {
            some: {
              userId: userId,
            },
          },
        },
      });
    } else {
      return null;
    }
  }

  public async createPage(
    userId?: string | null,
    pageId?: string | null,
    title?: string | null
  ): Promise<{ userId: string; pageId: string } | null> {
    if (userId && pageId && title) {
      return await this.client.userPages.create({
        data: {
          page: {
            connectOrCreate: {
              where: { id: pageId },
              create: { page_id: pageId, title: title },
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
