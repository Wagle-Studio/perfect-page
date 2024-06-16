import { Link } from "@/ui/admin/components/link/Link";
import { PageIcon } from "@/ui/admin/components/icons/PageIcon";
import { DatabaseIcon } from "@/ui/admin/components/icons/DatabaseIcon";
import { ThemeIcon } from "@/ui/admin/components/icons/ThemeIcon";
import { UserIcon } from "@/ui/admin/components/icons/UserIcon";
import "./side_pannel.scss";

export function SidePannel() {
  return (
    <nav className="admin__side-pannel">
      <ul className="admin__side-pannel__menu-list">
        <li className="admin__side-pannel__menu-list__item">
          <Link href="#">
            <UserIcon size="small" />
            Profile
          </Link>
        </li>
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
      </ul>
    </nav>
  );
}
