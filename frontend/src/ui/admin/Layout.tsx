import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { UserRepository } from "@/cdn/backend/repositories/UserRepository";
import { IntegrationKeyCard } from "@/ui/admin/components/organisms/integrationKeyCard/IntegrationKeyCard";
import { Header } from "@/ui/admin/components/molecules/header/Header";
import { SidePannel } from "@/ui/admin/components/molecules/sidePannel/SidePannel";
import { Section } from "@/ui/admin/components/atoms/section/Section";
import "./globals.scss";
import "./layout.scss";

const inter = Inter({ subsets: ["latin"] });

export async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  const userRepository = new UserRepository();
  const user = await userRepository.getSettings(session?.user.email);

  return (
    <body className={`${inter.className} admin__layout`}>
      <Header />
      <div className="admin__layout__dashboard">
        {user && user.Settings && user.Settings.integration_key && (
          <>
            <Section className="admin__layout__dashboard__side-pannel">
              <SidePannel />
            </Section>
            <Section className="admin__layout__dashboard__main-pannel">
              <main>{children}</main>
            </Section>
          </>
        )}
        {(!user || !user.Settings) && (
          <main className="admin__layout__dashboard__welcome-pannel">
            <Section>
              <IntegrationKeyCard />
            </Section>
          </main>
        )}
      </div>
    </body>
  );
}
