"use client";

import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { Section } from "@/ui/web/components/section/Section";
import { Button } from "@/ui/web/components/button/Button";
import { GoogleIcon } from "@/ui/web/components/icons/GoogleIcon";
import { Link } from "@/ui/web/components/link/Link";
import "./page.scss";

export default function SignUp() {
  const { data: session, status } = useSession();

  return (
    <div className="web__sign-up">
      <Section className="web__sign-up__hero">
        <div className="web__sign-up__hero__container">
          <h1>Perfect Page</h1>
          {(status === "loading" || status === "unauthenticated") && (
            <>
              <p>
                We'll sign you in or create a new account if you don't have one
                yet
              </p>
              <div className="web__sign-up__hero__container__prodivers">
                <Button
                  onClick={() =>
                    signIn("google", {
                      callbackUrl: "http://localhost:3000/dashboard",
                    })
                  }
                >
                  <GoogleIcon size="small" />
                  Continue with Google
                </Button>
              </div>
            </>
          )}
          {status === "authenticated" && session && (
            <>
              <p>You are logged in with the Google account :</p>
              <div className="web__sign-up__hero__container__user-data">
                {session.user.image && (
                  <Image
                    src={session.user.image}
                    alt={`Profile picture of ${session.user.name}`}
                    width={50}
                    height={50}
                  />
                )}
                <div className="web__sign-up__hero__container__user-data__name-email">
                  <p>{session.user?.name}</p>
                  <p>{session.user?.email}</p>
                </div>
              </div>
              <div className="web__sign-up__hero__container__prodivers">
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
    </div>
  );
}
