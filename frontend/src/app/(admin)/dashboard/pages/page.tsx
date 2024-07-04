import { getServerSession } from "next-auth";
import { PageRepository } from "@/cdn/backend/repositories/PageRepository";
import { PageCardTable } from "@/ui/admin/organisms/pageCardTable/PageCardTable";

export default async function DashboardPages() {
  const session = await getServerSession();
  const pageRepository = new PageRepository();
  const pages = await pageRepository.getPages(session?.user.email);

  return <PageCardTable pages={pages} />;
}
