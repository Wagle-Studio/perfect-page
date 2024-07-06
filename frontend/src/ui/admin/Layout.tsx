import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import { SettingsRepository } from "@/cdn/backend/repositories/SettingsRepository";
import { UserRepository } from "@/cdn/backend/repositories/UserRepository";
import { IntegrationKeyCardForm } from "@/ui/admin/organisms/integrationKeyCardForm/IntegrationKeyCardForm";
import { SidePannel } from "@/ui/admin/molecules/sidePannel/SidePannel";
import { Header } from "@/ui/admin/molecules/header/Header";
import { Section } from "@/ui/admin/atoms/section/Section";
import { ToastProvider } from "@/ui/admin/atoms/toast/ToastProvider";
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
  const user = await userRepository.getUser(session?.user.email);

  const settingsRepository = new SettingsRepository();
  const settings = await settingsRepository.getSettings(session?.user.email);

  // TODO: improve error pannel.
  return (
    <body className={`${inter.className} dashboard__layout`}>
      <Header />
      {session && settings && settings.integrationKey && (
        <div className="dashboard__layout__content">
          <Section className="dashboard__layout__content__side-pannel">
            <SidePannel />
          </Section>
          <div className="dashboard__layout__content__main-pannel">
            <main>{children}</main>
          </div>
        </div>
      )}
      {user && session && (!settings || !settings.integrationKey) && (
        <main className="dashboard__layout__content__welcome-pannel">
          <IntegrationKeyCardForm
            variant="welcome"
            user={user}
            settings={settings}
          />
        </main>
      )}
      {(!session || !user) && (
        <main className="dashboard__layout__content__error-pannel">
          <Section>
            <h1>ERROR</h1>
          </Section>
        </main>
      )}
      <ToastProvider />
    </body>
  );
}
