import { redirect } from "next/navigation";

import { STOCKS_ROUTES } from "@/constants/routes";

export default function Home() {
  redirect(STOCKS_ROUTES.DASHBOARD.path);
}
