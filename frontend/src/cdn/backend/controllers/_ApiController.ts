export abstract class ApiController {
  protected request: Request;

  protected abstract entity: string;

  public constructor(request: Request) {
    this.request = request;
  }

  protected hasMandatoryFields(
    mandatoryFields: Record<string, string>,
    res: any
  ): boolean {
    return Object.values(mandatoryFields).every((field) => field in res);
  }

  protected resCreatedSuccess(message?: string | Record<string, any>) {
    if (typeof message === "string") {
      return this.createResponse(201, {
        message,
      });
    } else if (typeof message === "object") {
      return this.createResponse(201, message);
    } else {
      return this.createResponse(201, {
        message:
          message ??
          `The ${this.entity} resource has been successfully created`,
      });
    }
  }

  protected resBadRequestError(error?: string) {
    return this.createResponse(400, {
      error: error ?? `Missing required ${this.entity} parameters or fields`,
    });
  }

  protected resNotFoundError(error?: string) {
    return this.createResponse(404, {
      error: error ?? `Entity ${this.entity} not found`,
    });
  }

  protected resUnprocessableEntityError(error?: string) {
    return this.createResponse(422, {
      error: error ?? `The ${this.entity} resource could not be processed`,
    });
  }

  protected resInternalServerError(error?: string) {
    return this.createResponse(500, {
      error: error ?? "The server encountered an internal error",
    });
  }

  private createResponse(status: number, body: Record<string, any>) {
    return new Response(JSON.stringify(body), {
      status: status,
      headers: { "Content-Type": "application/json" },
    });
  }
}
