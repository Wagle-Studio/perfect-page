import { getServerSession } from "next-auth";
import { UserRepository } from "@/cdn/backend/repositories/UserRepository";
import { PageRepository } from "@/cdn/backend/repositories/PageRepository";
import { PageTable } from "@/ui/admin/organisms/pageTable/PageTable";

export default async function DashboardPages() {
  const session = await getServerSession();
  const userRepository = new UserRepository();
  const user = await userRepository.getUser(session?.user.email);
  const pageRepository = new PageRepository();
  const pages = await pageRepository.getPages(user?.id);

  return <>{user && pages && <PageTable pages={pages} />}</>;
}
