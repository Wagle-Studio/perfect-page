import { getServerSession } from "next-auth";
import { UserRepository } from "@/cdn/backend/repositories/UserRepository";
import { PageCard } from "@/ui/admin/organisms/pageCard/PageCard";

export default async function DashboardPagesNew() {
  const session = await getServerSession();
  const userRepository = new UserRepository();
  const user = await userRepository.getSettings(session?.user.email);

  return <>{user && <PageCard user={user} />}</>;
}
