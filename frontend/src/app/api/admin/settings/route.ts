import { UserController } from "@/cdn/backend/controllers/UserController";

export async function POST(request: Request) {
  const userController = new UserController(request);
  return userController.createUserSettings()
}
