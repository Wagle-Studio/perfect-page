import { getServerSession } from "next-auth";
import { UserRepository } from "@/cdn/backend/repositories/UserRepository";
import { Card } from "@/ui/admin/atoms/card/Card";
import { Link } from "@/ui/admin/atoms/link/Link";
import { ThemeIcon } from "@/ui/admin/atoms/icons/ThemeIcon";
import { SaveIcon } from "@/ui/admin/atoms/icons/SaveIcon";
import { TrashIcon } from "@/ui/admin/atoms/icons/TrashIcon";

export default async function DashboardThemesNew() {
  const session = await getServerSession();
  const userRepository = new UserRepository();
  const user = await userRepository.getSettings(session?.user.email);

  return (
    <Card
      title={<h2>New theme</h2>}
      icon={<ThemeIcon size="large" />}
      toolbar={
        <>
          <Link
            href="/dashboard/themes/new"
            variant="button"
            severity="secondary"
          >
            Save <SaveIcon size="small" />
          </Link>
          <Link
            href="/dashboard/themes/new"
            variant="button"
            severity="primary"
          >
            Quit <TrashIcon size="small" />
          </Link>
        </>
      }
    >
      <div></div>
    </Card>
  );
}
