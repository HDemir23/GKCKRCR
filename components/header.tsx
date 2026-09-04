"use client";

import { useEffect, useState } from "react";
import {
  BagSimple,
  List,
  Moon,
  Sun,
  X,
} from "@phosphor-icons/react";
import { useShop } from "./shop-provider";

const links = [
  { href: "#koleksiyonlar", label: "Koleksiyonlar" },
  { href: "#yeni", label: "Yeni eklenenler" },
  { href: "#hediye", label: "Ücretsiz hediye" },
  { href: "#hakkimda", label: "Hakkımda" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { cartCount } = useShop();

  useEffect(() => {
    const stored = localStorage.getItem("gk-theme");
    const dark = stored ? stored === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(dark);
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("gk-theme", next ? "dark" : "light");
  };

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark" href="#top" aria-label="GK Studio ana sayfa">
          GK<span>Studio</span>
        </a>

        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Ana menü">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="icon-button" type="button" onClick={toggleTheme} aria-label={isDark ? "Açık temaya geç" : "Koyu temaya geç"}>
            {isDark ? <Sun size={20} weight="regular" /> : <Moon size={20} weight="regular" />}
          </button>
          <button className="cart-button" type="button" aria-label={`Sepet, ${cartCount} ürün`}>
            <BagSimple size={20} weight="regular" />
            <span>Sepet</span>
            <b>{cartCount}</b>
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
