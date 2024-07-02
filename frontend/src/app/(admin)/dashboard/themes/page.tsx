import { getServerSession } from "next-auth";
import { UserRepository } from "@/cdn/backend/repositories/UserRepository";
import { Card } from "@/ui/admin/atoms/card/Card";
import { Link } from "@/ui/admin/atoms/link/Link";
import { ThemeIcon } from "@/ui/admin/atoms/icons/ThemeIcon";
import { PlusIcon } from "@/ui/admin/atoms/icons/PlusIcon";

export default async function DashboardThemes() {
  const session = await getServerSession();
  const userRepository = new UserRepository();
  const user = await userRepository.getSettings(session?.user.email);

  return (
    <Card
      title={<h2>Themes</h2>}
      icon={<ThemeIcon size="large" />}
      toolbar={
        <Link
          href="/dashboard/themes/new"
          variant="button"
          severity="secondary"
        >
          Create theme <PlusIcon size="small" />
        </Link>
      }
    >
      <div></div>
    </Card>
  );
}
