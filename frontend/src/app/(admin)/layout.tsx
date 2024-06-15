import { Header } from "@/ui/admin/components/header/Header";
import { Section } from "@/ui/admin/layouts/section/Section";
import "./layout.scss";
import { Link } from "@/ui/admin/components/link/Link";
import { SidePannel } from "@/ui/admin/components/sidePannel/SidePannel";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="layout-admin">
      <Header />
      <div className="layout-admin__dashboard">
        <Section className="layout-admin__dashboard__side-pannel">
          <SidePannel />
        </Section>
        <Section className="layout-admin__dashboard__main-pannel">
          {children}
        </Section>
      </div>
    </div>
  );
}
