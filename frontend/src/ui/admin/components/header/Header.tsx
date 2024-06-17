"use client";

import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { Link } from "@/ui/admin/components/link/Link";
import { Button } from "@/ui/admin/components/button/Button";
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
            <p>{session?.user.name}</p>
            {session.user.image && (
              <Image
                src={session.user.image}
                alt={`Profile picture of ${session.user.name}`}
                width={50}
                height={50}
              />
            )}
          </div>
        )}
      </div>
    </header>
  );
}
