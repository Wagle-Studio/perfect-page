"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import "./header.scss";

import { Link } from "@/ui/admin/atoms/link/Link";

// TODO: update to server side.
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
