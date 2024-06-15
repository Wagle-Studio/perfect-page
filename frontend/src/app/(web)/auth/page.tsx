"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Section } from "@/ui/web/layouts/section/Section";
import { Button } from "@/ui/web/components/button/Button";
import { GoogleIcon } from "@/ui/web/components/icons/GoogleIcon";
import { Link } from "@/ui/web/components/link/Link";
import "./page.scss";

export default function SignUp() {
  const { data: session, status } = useSession();

  return (
    <main className="sign-up">
      <Section className="sign-up__hero">
        <div className="sign-up__hero__container">
          <h1>Perfect Page</h1>
          {(status === "loading" || status === "unauthenticated") && (
            <>
              <p>
                We'll sign you in or create a new account if you don't have one
                yet
              </p>
              <div className="sign-up__hero__container__prodivers">
                <Button onClick={() => signIn("google")}>
                  <GoogleIcon size="small" />
                  Continue with Google
                </Button>
              </div>
            </>
          )}
          {status === "authenticated" && session && (
            <>
              <p>You are logged in with the Google account :</p>
              <div className="sign-up__hero__container__user-data">
                <p>{session.user?.name}</p>
                <p>{session.user?.email}</p>
              </div>
              <div className="sign-up__hero__container__prodivers">
                <Link href="/dashboard" variant="button" severity="gray">
                  <GoogleIcon size="small" />
                  Continue as {session.user?.name}
                </Link>
                <Button severity="black" onClick={() => signOut()}>
                  Sign out
                </Button>
              </div>
            </>
          )}
        </div>
      </Section>
    </main>
  );
}
