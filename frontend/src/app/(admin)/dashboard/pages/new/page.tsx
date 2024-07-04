import { getServerSession } from "next-auth";
import { UserRepository } from "@/cdn/backend/repositories/UserRepository";
import { PageCardForm } from "@/ui/admin/organisms/pageCardForm/PageCardForm";

export default async function DashboardPagesNew() {
  const session = await getServerSession();
  const userRepository = new UserRepository();
  const user = await userRepository.getUser(session?.user.email);

  // TODO: handle case when there is no user session.
  return <>{user && <PageCardForm user={user} />}</>;
}
