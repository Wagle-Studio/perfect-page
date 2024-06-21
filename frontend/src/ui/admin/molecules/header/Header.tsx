import { HTMLAttributes } from "react";
import Image from "next/image";
import { getServerSession } from "next-auth";
import classNames from "classnames";
import { Link } from "@/ui/admin/atoms/link/Link";
import "./header.scss";

export async function Header(props: HTMLAttributes<HTMLElement>) {
  const session = await getServerSession();
  const headerClasses = classNames("admin__header", props.className);

  return (
    <header className={headerClasses} {...props}>
      <div className="admin__header__nav">
        <div className="admin__header__nav__brand">
          <div className="admin__header__nav__brand__logo">
            <Link href="/">Perfect Page</Link>
          </div>
        </div>
        {session && session.user && session.user.name && (
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
