"use client";

import { signOut } from "next-auth/react";
import { PageIcon } from "@/ui/admin/atoms/icons/PageIcon";
import { DatabaseIcon } from "@/ui/admin/atoms/icons/DatabaseIcon";
import { ThemeIcon } from "@/ui/admin/atoms/icons/ThemeIcon";
import { UserIcon } from "@/ui/admin/atoms/icons/UserIcon";
import { LogoutIcon } from "@/ui/admin/atoms/icons/LogoutIcon";
import "./side_pannel.scss";

import { Link } from "@/ui/admin/atoms/link/Link";
import { Button } from "@/ui/admin/atoms/button/Button";

export function SidePannel() {
  return (
    <nav className="admin__side-pannel">
      <ul className="admin__side-pannel__menu-list">
        <li className="admin__side-pannel__menu-list__item">
          <Link href="#">
            <PageIcon size="small" />
            Pages
          </Link>
        </li>
        <li className="admin__side-pannel__menu-list__item">
          <Link href="#">
            <DatabaseIcon size="small" />
            Databases
          </Link>
        </li>
        <li className="admin__side-pannel__menu-list__item">
          <Link href="#">
            <ThemeIcon size="small" />
            Themes
          </Link>
        </li>
        <li className="admin__side-pannel__menu-list__item">
          <Link href="#">
            <UserIcon size="small" />
            Profile
          </Link>
        </li>
        <li className="admin__side-pannel__menu-list__item">
          <Button severity="invisible" onClick={() => signOut()}>
            <LogoutIcon size="small" />
            Log out
          </Button>
        </li>
      </ul>
    </nav>
  );
}
