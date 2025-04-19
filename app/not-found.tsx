import { redirect } from "next/navigation"
;
import { STOCKS_ROUTES } from "@/constants/routes";

export default function NotFound() {
  redirect(STOCKS_ROUTES.DASHBOARD.path);
}
