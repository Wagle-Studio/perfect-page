import { Section } from "@/ui/web/components/section/Section";
import "./page.scss";

export default async function Home() {
  return (
    <main className="home">
      <Section className="home__hero">
        <h1 className="home__hero__title">Magnify your Notion pages</h1>
        <div className="home__hero__subtitle">
          <p>Elevate your Notion pages to professional websites</p>
          <p>with customizable themes and designs</p>
        </div>
      </Section>
    </main>
  );
}
