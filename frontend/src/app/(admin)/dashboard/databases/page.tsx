import { Card } from "@/ui/admin/atoms/card/Card";
import { DatabaseIcon } from "@/ui/admin/atoms/icons/DatabaseIcon";

export default async function DashboardDatabases() {
  return (
    <Card title={<h2>Databases</h2>} icon={<DatabaseIcon size="large" />}>
      <div></div>
    </Card>
  );
}
