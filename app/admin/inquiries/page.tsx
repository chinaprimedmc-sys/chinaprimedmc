import { InquiriesManager } from "@/features/admin/inquiries-manager";
import { getAdminInquiries } from "@/lib/inquiries/data";

export default async function AdminInquiriesPage() {
  return <InquiriesManager initialItems={await getAdminInquiries()} />;
}
