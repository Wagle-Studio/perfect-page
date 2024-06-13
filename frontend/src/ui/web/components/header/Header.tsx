"use client";

import { useState } from "react";
import { Link } from "@/ui/web/components/link/Link";
import { CrossIcon } from "@/ui/web/components/icons/CrossIcon";
import { MenuIcon } from "../icons/MenuIcon";
import "./header.scss";
import { Button } from "@/ui/web/components/button/Button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  let menuButtonClasses = ["header__nav__brand__menu-button"];
  let listLinksClasses = ["header__nav__list-links"];

  if (isMenuOpen) {
    menuButtonClasses = [
      ...menuButtonClasses,
      "header__nav__brand__menu-button--open",
    ];
    listLinksClasses = [...listLinksClasses, "header__nav__list-links--open"];
  } else {
    menuButtonClasses = [
      ...menuButtonClasses,
      "header__nav__brand__menu-button--close",
    ];
    listLinksClasses = [...listLinksClasses, "header__nav__list-links--close"];
  }

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__nav__brand">
          <div className="header__nav__brand__logo">
            <p>Perfect Page</p>
          </div>
          <div className={menuButtonClasses.join(" ")}>
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              severity="invisible"
            >
              <MenuIcon size="large" />
              <CrossIcon size="large" />
            </Button>
          </div>
        </div>
        <div className={listLinksClasses.join(" ")}>
          <ul>
            <li>
              <Link href="#" content="Features" />
            </li>
            <li>
              <Link href="#" content="Pricing" />
            </li>
            <li>
              <Link href="#" content="Roadmap" />
            </li>
          </ul>
          <div className="header__nav__list-links__buttons">
            <Link href="#" content="Log in" variant="button" severity="gray" />
            <Link
              href="#"
              content="Sign up"
              variant="button"
              severity="black"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
