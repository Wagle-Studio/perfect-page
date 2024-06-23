import { getServerSession } from "next-auth";
import { UserRepository } from "@/cdn/backend/repositories/UserRepository";
import { IntegrationKeyCard } from "@/ui/admin/organisms/integrationKeyCard/IntegrationKeyCard";

export default async function DashboardProfile() {
  const session = await getServerSession();
  const userRepository = new UserRepository();
  const user = await userRepository.getSettings(session?.user.email);

  return <>{user && <IntegrationKeyCard variant="admin" user={user} />}</>;
}
