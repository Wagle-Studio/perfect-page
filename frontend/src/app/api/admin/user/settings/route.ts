import { UserController } from "@/cdn/backend/controllers/UserController";
import { SettingsController } from "@/cdn/backend/controllers/SettingsController";

export async function POST(request: Request) {
  const userController = new UserController(request);
  return userController.createUserSettings();
}

export async function PUT(request: Request) {
  const settingsController = new SettingsController(request);
  return settingsController.updateSettings();
}
