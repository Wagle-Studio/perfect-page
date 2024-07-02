import { getServerSession } from "next-auth";
import { UserRepository } from "@/cdn/backend/repositories/UserRepository";
import { Card } from "@/ui/admin/atoms/card/Card";
import { DatabaseIcon } from "@/ui/admin/atoms/icons/DatabaseIcon";

export default async function DashboardDatabases() {
  const session = await getServerSession();
  const userRepository = new UserRepository();
  const user = await userRepository.getSettings(session?.user.email);

  return (
    <Card title={<h2>Databases</h2>} icon={<DatabaseIcon size="large" />}>
      <div></div>
    </Card>
  );
}
