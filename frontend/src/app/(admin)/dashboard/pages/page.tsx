import { getServerSession } from "next-auth";
import { UserRepository } from "@/cdn/backend/repositories/UserRepository";
import { Card } from "@/ui/admin/atoms/card/Card";
import { Link } from "@/ui/admin/atoms/link/Link";
import { PageIcon } from "@/ui/admin/atoms/icons/PageIcon";
import { PlusIcon } from "@/ui/admin/atoms/icons/PlusIcon";

export default async function DashboardPages() {
  const session = await getServerSession();
  const userRepository = new UserRepository();
  const user = await userRepository.getSettings(session?.user.email);

  return (
    <Card
      title={<h2>Pages</h2>}
      icon={<PageIcon size="large" />}
      toolbar={
        <Link href="/dashboard/pages/new" variant="button" severity="secondary">
          Register page
          <PlusIcon size="small" />
        </Link>
      }
    >
      <div></div>
    </Card>
  );
}
