import { Section } from "@/ui/web/layouts/section/Section";
import "./not_found.scss";

export default function NotFound() {
  return (
    <main className="not-found">
      <Section className="not-found__hero">
        <h1 className="not-found__hero__title">Page not found</h1>
        <div className="not-found__hero__subtitle">
          <p>Oops ! It looks like this page doesn't exist</p>
        </div>
      </Section>
    </main>
  );
}
