import { redirect } from "next/navigation";

export default async function AdminMediaPage() {
  redirect("/studio/content/dashboard");
}
