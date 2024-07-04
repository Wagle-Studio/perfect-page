import { IntegrationKeyController } from "@/cdn/backend/controllers/IntegrationKeyController";

export async function POST(request: Request) {
  const integrationKeyController = new IntegrationKeyController(request);
  return integrationKeyController.testIntegrationKey()
}
