import { ApiController } from "@/cdn/backend/controllers/_ApiController";
import { PageRepository } from "@/cdn/backend/repositories/PageRepository";

export class PageController extends ApiController {
  protected entity = "page";

  public constructor(request: Request) {
    super(request);
  }

  public async createPage() {
    enum MandatoryFields {
      "PAGE_ID" = "pageId",
      "USER_ID" = "userId",
    }

    try {
      const res = await this.request.json();

      if (!this.hasMandatoryFields(MandatoryFields, res)) {
        return this.resBadRequestError();
      }

      const pageRepository = new PageRepository();
      const page = await pageRepository.createPage(res.pageId, res.userId);

      if (!page) {
        return this.resNotFoundError();
      }

      if (!page) {
        return this.resUnprocessableEntityError();
      }

      return this.resCreatedSuccess(page);
    } catch (error) {
      console.log(error);
      return this.resInternalServerError();
    }
  }
}
