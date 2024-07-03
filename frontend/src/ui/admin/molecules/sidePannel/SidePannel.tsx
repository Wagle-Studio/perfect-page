"use client";

import { HTMLAttributes } from "react";
import { signOut } from "next-auth/react";
import classNames from "classnames";
import { Link } from "@/ui/admin/atoms/link/Link";
import { Button } from "@/ui/admin/atoms/button/Button";
import { PageIcon } from "@/ui/admin/atoms/icons/PageIcon";
import { DatabaseIcon } from "@/ui/admin/atoms/icons/DatabaseIcon";
import { ThemeIcon } from "@/ui/admin/atoms/icons/ThemeIcon";
import { UserIcon } from "@/ui/admin/atoms/icons/UserIcon";
import { LogoutIcon } from "@/ui/admin/atoms/icons/LogoutIcon";
import "./side_pannel.scss";

export function SidePannel(props: HTMLAttributes<HTMLElement>) {
  const sidePannelClasses = classNames("admin__side-pannel", props.className);

  return (
    <nav className={sidePannelClasses} {...props}>
      <ul className="admin__side-pannel__menu-list">
        <li className="admin__side-pannel__menu-list__item">
          <Link href="/dashboard/pages">
            <PageIcon size="small" />
            <span className="admin__side-pannel__menu-list__item__content">
              Pages
            </span>
          </Link>
        </li>
        <li className="admin__side-pannel__menu-list__item">
          <Link href="/dashboard/databases">
            <DatabaseIcon size="small" />
            <span className="admin__side-pannel__menu-list__item__content">
              Databases
            </span>
          </Link>
        </li>
        <li className="admin__side-pannel__menu-list__item">
          <Link href="/dashboard/themes">
            <ThemeIcon size="small" />
            <span className="admin__side-pannel__menu-list__item__content">
              Themes
            </span>
          </Link>
        </li>
        <li className="admin__side-pannel__menu-list__item">
          <Link href="/dashboard/profile">
            <UserIcon size="small" />
            <span className="admin__side-pannel__menu-list__item__content">
              Profile
            </span>
          </Link>
        </li>
        <li className="admin__side-pannel__menu-list__item">
          <Button severity="invisible" onClick={() => signOut()}>
            <LogoutIcon size="small" />
            <span className="admin__side-pannel__menu-list__item__content">
              Log out
            </span>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
