import { Inter } from "next/font/google";
import { Header } from "@/ui/admin/components/header/Header";
import { SidePannel } from "@/ui/admin/components/sidePannel/SidePannel";
import { Section } from "@/ui/admin/components/section/Section";
import "./globals.scss";
import "./layout.scss";

const inter = Inter({ subsets: ["latin"] });

export function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`${inter.className} admin__layout`}>
      <Header />
      <div className="admin__layout__dashboard">
        <Section className="admin__layout__dashboard__side-pannel">
          <SidePannel />
        </Section>
        <Section className="admin__layout__dashboard__main-pannel">
          <main>{children}</main>
        </Section>
      </div>
    </body>
  );
}
