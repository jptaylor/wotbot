"use client";

import { IconLink } from "@/components/ui/iconlink";
import {
  BotMessageSquare,
  LogOut,
  MessageSquareText,
  RectangleEllipsis,
} from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className="p-air flex flex-col justify-between">
      <header>
        <h1 className="text-2xl mb-12">Wotbot</h1>
        <nav className="flex flex-col gap-2">
          <IconLink
            href="/dashboard"
            variant={pathname === "/dashboard" ? "primary" : "default"}
            icon={BotMessageSquare}
          >
            My Wotbots
          </IconLink>
          <IconLink
            href="/test"
            variant={pathname === "/test" ? "primary" : "default"}
            icon={MessageSquareText}
          >
            Call History
          </IconLink>
          <IconLink
            href="/keys"
            variant={pathname === "/keys" ? "primary" : "default"}
            icon={RectangleEllipsis}
          >
            API Keys
          </IconLink>
        </nav>
      </header>
      <footer className="flex flex-col gap-2">
        <IconLink href="/auth" icon={LogOut}>
          Sign out
        </IconLink>
      </footer>
    </aside>
  );
};

export default Sidebar;
