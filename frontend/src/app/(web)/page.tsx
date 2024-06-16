import { Section } from "@/ui/web/components/section/Section";
import "./page.scss";

export default async function Home() {
  return (
    <div className="web__home">
      <Section className="web__home__hero">
        <h1 className="web__home__hero__title">Magnify your Notion pages</h1>
        <div className="web__home__hero__subtitle">
          <p>Elevate your Notion pages to professional websites</p>
          <p>with customizable themes and designs</p>
        </div>
      </Section>
    </div>
  );
}
