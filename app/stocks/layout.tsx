"use client";

import { usePathname } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { STOCKS_ROUTES } from "@/constants/routes";
import { StockSearchInput } from "@/modules/stocks/components";

const getRouteTitle = (pathname: string) => {
  return Object.values(STOCKS_ROUTES).find((route) => route.path === pathname)
    ?.title;
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const title = getRouteTitle(pathname);

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader title={title ?? "--"}>
          <StockSearchInput />
        </SiteHeader>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
