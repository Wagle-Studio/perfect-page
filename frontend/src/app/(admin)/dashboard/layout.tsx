import { Layout } from "@/ui/admin/Layout";

export const metadata = {
  title: "Page Perfect Dashboard",
  description: "Page Perfect Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
