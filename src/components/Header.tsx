"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/logo-design", label: "Logo Design" },
  { href: "/design-hall", label: "Design Hall" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandLogo />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "nav-link active" : "nav-link"}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/dashboard" className="signin-link">
            Sign In
          </Link>
          <Link href="/logo-design" className="button button-primary button-small">
            Get Started
          </Link>
          <button
            className="icon-button mobile-menu-button"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "nav-link active" : "nav-link"}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/dashboard" className="nav-link" onClick={() => setOpen(false)}>
            Customer Dashboard
          </Link>
          <Link href="/admin" className="nav-link" onClick={() => setOpen(false)}>
            Admin
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
