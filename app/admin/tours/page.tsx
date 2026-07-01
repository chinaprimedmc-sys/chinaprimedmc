import { redirect } from "next/navigation";

export default function AdminToursRedirectPage() {
  redirect("/admin/journeys");
}
