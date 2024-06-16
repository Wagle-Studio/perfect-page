import { Layout } from "@/ui/web/Layout";
import { Section } from "@/ui/web/components/section/Section";
import "./not_found.scss";

export default function NotFound() {
  return (
    <Layout>
      <div className="not-found">
        <Section className="not-found__hero">
          <h1 className="not-found__hero__title">Page not found</h1>
          <div className="not-found__hero__subtitle">
            <p>Oops ! It looks like this page doesn't exist</p>
          </div>
        </Section>
      </div>
    </Layout>
  );
}
