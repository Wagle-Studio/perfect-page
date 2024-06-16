import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { UserRepository } from "@/libs/Prisma/repositories/UserRepository";
import { WelcomeForm } from "@/ui/admin/forms/WelcomeForm";
import { Header } from "@/ui/admin/components/header/Header";
import { SidePannel } from "@/ui/admin/components/sidePannel/SidePannel";
import { Section } from "@/ui/admin/components/section/Section";
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

  const userSettings = await userRepository.getUserSettings(
    session?.user.email
  );

  return (
    <body className={`${inter.className} admin__layout`}>
      <Header />
      <div className="admin__layout__dashboard">
        {userSettings && (
          <Section className="admin__layout__dashboard__side-pannel">
            <SidePannel />
          </Section>
        )}
        {userSettings && (
          <Section className="admin__layout__dashboard__main-pannel">
            <main>{children}</main>
          </Section>
        )}
        {!userSettings && (
          <Section className="admin__layout__dashboard__welcome-pannel">
            <main>
              <WelcomeForm />
            </main>
          </Section>
        )}
      </div>
    </body>
  );
}
