import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { UserRepository } from "@/libs/Prisma/repositories/UserRepository";
import { IntegrationKey } from "@/ui/admin/forms/IntegrationKey";
import { Header } from "@/ui/admin/components/header/Header";
import { SidePannel } from "@/ui/admin/components/sidePannel/SidePannel";
import { Section } from "@/ui/admin/components/section/Section";
import { Link } from "@/ui/admin/components/link/Link";
import { KeyIcon } from "@/ui/admin/components/icons/KeyIcon";
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
              <div className="admin__layout__dashboard__welcome-pannel__card">
                <div className="admin__layout__dashboard__welcome-pannel__card__header">
                  <div className="admin__layout__dashboard__welcome-pannel__card__header__title">
                    <KeyIcon size="large" />
                    <h1>Notion integration</h1>
                  </div>
                  <div className="admin__layout__dashboard__welcome-pannel__card__header__sub-title">
                    <p>
                      This integration enables interaction between Perfect Page
                      and Notion, allowing you to access the pages you choose to
                      share effortlessly
                    </p>
                    <p>
                      Your data's security and privacy are our top priorities
                    </p>
                  </div>
                </div>
                <div className="admin__layout__dashboard__welcome-pannel__card__body">
                  <div className="admin__layout__dashboard__welcome-pannel__card__body__guide">
                    <div className="admin__layout__dashboard__welcome-pannel__card__body__guide__step">
                      <div>
                        <p>
                          <span>Step</span>1
                        </p>
                      </div>
                      <p>
                        Visit{" "}
                        <Link
                          variant="inline"
                          href="https://www.notion.so/my-integrations"
                        >
                          https://www.notion.so/my-integrations
                        </Link>{" "}
                        to create an integration
                      </p>
                    </div>
                    <div className="admin__layout__dashboard__welcome-pannel__card__body__guide__step">
                      <div>
                        <p>
                          <span>Step</span>2
                        </p>
                      </div>
                      <p>Get your secret key and register it below</p>
                    </div>
                  </div>
                  <div className="admin__layout__dashboard__welcome-pannel__card__body__form">
                    <IntegrationKey />
                  </div>
                </div>
              </div>
            </main>
          </Section>
        )}
      </div>
    </body>
  );
}
