import { getServerSession } from "next-auth";
import { UserRepository } from "@/cdn/backend/repositories/UserRepository";
import { SettingsRepository } from "@/cdn/backend/repositories/SettingsRepository";
import { IntegrationKeyCardForm } from "@/ui/admin/organisms/integrationKeyCardForm/IntegrationKeyCardForm";

export default async function DashboardProfile() {
  const session = await getServerSession();

  const userRepository = new UserRepository();
  const user = await userRepository.getUser(session?.user.email);

  const settingsRepository = new SettingsRepository();
  const settings = await settingsRepository.getSettings(session?.user.email);

  // TODO: handle case when there is no user session.
  return (
    <>
      {user && settings && (
        <IntegrationKeyCardForm
          variant="admin"
          user={user}
          settings={settings}
        />
      )}
    </>
  );
}
