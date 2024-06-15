import { Link } from "@/ui/admin/components/link/Link";
import { PageIcon } from "@/ui/admin/components/icons/PageIcon";
import { DatabaseIcon } from "@/ui/admin/components/icons/DatabaseIcon";
import { ThemeIcon } from "@/ui/admin/components/icons/ThemeIcon";
import { UserIcon } from "@/ui/admin/components/icons/UserIcon";
import "./side_pannel.scss";

export function SidePannel() {
  return (
    <nav className="side-pannel">
      <ul className="side-pannel__menu-list">
        <li className="side-pannel__menu-list__item">
          <Link href="#">
            <UserIcon size="small" />
            Profil
          </Link>
        </li>
        <li className="side-pannel__menu-list__item">
          <Link href="#">
            <PageIcon size="small" />
            Pages
          </Link>
        </li>
        <li className="side-pannel__menu-list__item">
          <Link href="#">
            <DatabaseIcon size="small" />
            Base de données
          </Link>
        </li>
        <li className="side-pannel__menu-list__item">
          <Link href="#">
            <ThemeIcon size="small" />
            Thèmes
          </Link>
        </li>
      </ul>
    </nav>
  );
}
