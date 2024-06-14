import { Section } from "@/ui/web/layouts/section/Section";
import { Link } from "@/ui/web/components/link/Link";
import { GoogleIcon } from "@/ui/web/components/icons/GoogleIcon";
import "./page.scss";

export default function SignUp() {
  return (
    <main className="sign-up">
      <Section className="sign-up__hero">
        <div className="sign-up__hero__container">
          <h1>Registration</h1>
          <div className="sign-up__hero__container__prodivers">
            <Link href="#" variant="button" severity="gray">
              <GoogleIcon size="small" />
              Continue with Google
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
