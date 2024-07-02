import { getServerSession } from "next-auth";
import { UserRepository } from "@/cdn/backend/repositories/UserRepository";
import { Card } from "@/ui/admin/atoms/card/Card";
import { ThemeIcon } from "@/ui/admin/atoms/icons/ThemeIcon";

export default async function DashboardThemes() {
  const session = await getServerSession();
  const userRepository = new UserRepository();
  const user = await userRepository.getSettings(session?.user.email);

  return (
    <Card title={<h2>Themes</h2>} icon={<ThemeIcon size="large" />}>
      <div></div>
    </Card>
  );
}
