import { Link } from "@/ui/admin/components/link/Link";
import "./header.scss";

export function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__nav__brand">
          <div className="header__nav__brand__logo">
            <Link href="/">Perfect Page</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
