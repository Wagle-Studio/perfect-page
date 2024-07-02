import { PageController } from "@/cdn/backend/controllers/PageController";

export async function POST(request: Request) {
  const pageController = new PageController(request);
  return pageController.createPage();
}
