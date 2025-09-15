"use client";

import * as LucideIcons from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  label: string;
  href: string;
  iconName: string;
}

interface ClientSideMenuProps {
  items: MenuItemProps[];
  title: string;
}

export function SideBar({ items, title }: ClientSideMenuProps) {
  const pathname = usePathname();

  const getIcon = (iconName: string): LucideIcons.LucideIcon => {
    return LucideIcons[iconName as keyof typeof LucideIcons] as LucideIcons.LucideIcon;
  };

  const menuActive = (href: string): boolean => {
    if (href === "/dashboard") {
      return pathname === "/dashboard" || pathname === "/dashboard/";
    }
    return pathname.startsWith(href);
  };

  return (
    <section>
      <h5 className="ml-3 py-3 text-sm font-light tracking-wide text-slate-500">{title}</h5>
      {items.map((item) => {
        const Icon = getIcon(item.iconName);
        const isActive = menuActive(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-slate-50 ${
              isActive ? "bg-slate-50 text-gray-900" : "text-gray-500"
            }`}
          >
            <Icon size={18} />
            <span className="text-base font-normal">{item.label}</span>
          </Link>
        );
      })}
    </section>
  );
}
