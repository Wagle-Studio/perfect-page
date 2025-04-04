import { Pages } from "@prisma/client";
import { Repository } from "@/cdn/backend/repositories/_Repository";

export class PageRepository extends Repository {
  public constructor() {
    super();
  }

  public async getPage(pageId?: string | null): Promise<Pages | null> {
    if (pageId) {
      return await this.client.pages.findUnique({
        where: {
          id: pageId,
        },
      });
    } else {
      return null;
    }
  }

  public async getPageBySlug(slug?: string | null): Promise<Pages | null> {
    if (slug) {
      return await this.client.pages.findFirst({
        where: {
          slug: slug,
        },
      });
    } else {
      return null;
    }
  }

  public async getPages(userEmail?: string | null): Promise<Pages[] | null> {
    if (userEmail) {
      return await this.client.pages.findMany({
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

  public async createPage(
    userId?: string | null,
    pageId?: string | null,
    title?: string | null,
    slug?: string | null
  ): Promise<Pages | null> {
    if (userId && pageId && title && slug) {
      return await this.client.pages.create({
        data: {
          notionPageId: pageId,
          title: title,
          userId: userId,
          slug: slug,
        },
      });
    } else {
      return null;
    }
  }

  public async updatePage(
    id?: string | null,
    pageId?: string | null,
    title?: string | null,
    slug?: string | null
  ): Promise<Pages | null> {
    if (id && pageId && title && slug) {
      return await this.client.pages.update({
        where: {
          id: id,
        },
        data: {
          title: title,
          slug: slug,
        },
      });
    } else {
      return null;
    }
  }
}
