"use client";

import { useSession, signOut } from "next-auth/react";
import { Link } from "@/ui/admin/components/link/Link";
import { Button } from "@/ui/admin/components/button/Button";
import { LogoutIcon } from "@/ui/admin/components/icons/LogoutIcon";
import "./header.scss";

export function Header() {
  const { data: session, status } = useSession();

  return (
    <header className="admin__header">
      <div className="admin__header__nav">
        <div className="admin__header__nav__brand">
          <div className="admin__header__nav__brand__logo">
            <Link href="/">Perfect Page</Link>
          </div>
        </div>
        {status === "authenticated" && session && (
          <div className="admin__header__nav__user">
            <Button severity="invisible" onClick={() => signOut()}>
              {session?.user.name}
              <LogoutIcon size="medium" />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
