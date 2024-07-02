import { getServerSession } from "next-auth";
import { UserRepository } from "@/cdn/backend/repositories/UserRepository";
import { Card } from "@/ui/admin/atoms/card/Card";
import { PageIcon } from "@/ui/admin/atoms/icons/PageIcon";

export default async function DashboardPages() {
  const session = await getServerSession();
  const userRepository = new UserRepository();
  const user = await userRepository.getSettings(session?.user.email);

  return (
    <Card title={<h2>Pages</h2>} icon={<PageIcon size="large" />}>
      <div></div>
    </Card>
  );
}
