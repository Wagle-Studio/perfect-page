import { SettingsController } from "@/cdn/backend/controllers/SettingsController";

export async function POST(request: Request) {
  const settingsController = new SettingsController(request);
  return settingsController.createSettings();
}

export async function PUT(request: Request) {
  const settingsController = new SettingsController(request);
  return settingsController.updateSettings();
}
