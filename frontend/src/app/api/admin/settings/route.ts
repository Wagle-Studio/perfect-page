import { SettingsRepository } from "@/libs/Prisma/repositories/SettingsRepository";

export async function POST(request: Request) {
  const settingsRepository = new SettingsRepository();

  try {
    const res = await request.json();

    const createdSettings = await settingsRepository.createSettings(res);

    return new Response(JSON.stringify(createdSettings), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
