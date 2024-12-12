"use client";

import { GitHub, Twitter, Youtube } from "react-feather";

import Link from "next/link";
import ThemeSwitch from "@/components/theme-switch";
import { navigation } from "@/components/layout/header";

const navigationExtended = [
  ...navigation,
  {
    name: "Learn More",
    href: "https://samvera.atlassian.net/wiki/spaces/avalon/overview",
    isExternal: true,
  },
];

const socials = [
  {
    name: "X",
    href: "http://twitter.com/avalonmediasys",
    icon: Twitter,
  },
  {
    name: "GitHub",
    href: "https://github.com/avalonmediasystem/avalon",
    icon: GitHub,
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10" data-testid="layout-footer">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigationExtended.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-foreground/90 hover:text-foreground"
                {...(item.isExternal && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center items-center space-x-10">
          <ThemeSwitch />
          {socials.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground-muted/90 hover:text-foreground-muted"
              data-testid={`social-${item.name}`}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-5 w-5" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-foreground-muted">
          &copy; {new Date().getFullYear()} Avalon Media System. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
