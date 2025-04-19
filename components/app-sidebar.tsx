"use client";

import { IconDashboard, IconMoneybag, IconSettings } from "@tabler/icons-react";

import { MainNavigation } from "@/components/main-navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { STOCKS_ROUTES } from "@/constants/routes";

const NAVIGATION_ITEMS = [
  {
    title: "Dashboard",
    url: STOCKS_ROUTES.DASHBOARD.path,
    icon: IconDashboard,
  },
  {
    title: "Manage My Stocks",
    url: STOCKS_ROUTES.MANAGE.path,
    icon: IconSettings,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconMoneybag />
                <span className="text-base font-semibold">SyMonitor.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <MainNavigation items={NAVIGATION_ITEMS} />
      </SidebarContent>
    </Sidebar>
  );
}
