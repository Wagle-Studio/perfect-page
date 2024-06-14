"use client";

import { useState } from "react";
import classNames from "classnames";
import { Link } from "@/ui/web/components/link/Link";
import { Button } from "@/ui/web/components/button/Button";
import { CrossIcon } from "@/ui/web/components/icons/CrossIcon";
import { MenuIcon } from "@/ui/web/components/icons/MenuIcon";
import "./header.scss";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const headerClasses = classNames("header", {
    "header--open": isMenuOpen,
    "header--close": !isMenuOpen,
  });

  const menuButtonClasses = classNames("header__nav__brand__menu-button", {
    "header__nav__brand__menu-button--open": isMenuOpen,
    "header__nav__brand__menu-button--close": !isMenuOpen,
  });

  const listLinksClasses = classNames("header__nav__list-links", {
    "header__nav__list-links--open": isMenuOpen,
    "header__nav__list-links--close": !isMenuOpen,
  });

  return (
    <header className={headerClasses}>
      <nav className="header__nav">
        <div className="header__nav__brand">
          <div className="header__nav__brand__logo">
            <Link href="/">Perfect Page</Link>
          </div>
          <div className={menuButtonClasses}>
            <Button
              className="prout"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              severity="invisible"
            >
              {!isMenuOpen && <MenuIcon size="large" />}
              {isMenuOpen && <CrossIcon size="large" />}
            </Button>
          </div>
        </div>
        <div className={listLinksClasses}>
          <ul>
            <li>
              <Link href="#features">Features</Link>
            </li>
            <li>
              <Link href="#pricing">Pricing</Link>
            </li>
            <li>
              <Link href="#roadmap">Roadmap</Link>
            </li>
          </ul>
          <div className="header__nav__list-links__buttons">
            <Link href="/auth" variant="button" severity="gray">
              Log in
            </Link>
            <Link href="/auth" variant="button" severity="black">
              Sign up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
