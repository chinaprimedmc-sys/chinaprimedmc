import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2, LogOut, Mail, Users, CheckCircle, Clock } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";
import { useState } from "react";
import type { ContactSubmission } from "../../../../drizzle/schema";

export default function AdminDashboard() {
  const { user, loading: authLoading, logout } = useAuth();
  const [, navigate] = useLocation();
  const { data: submissions, isLoading } = trpc.contact.getSubmissions.useQuery();

  // 检查是否是管理员
  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin" size={32} />
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return (
      <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: "var(--brand-parchment)" }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--brand-ink)" }}>Access Denied</h1>
          <p className="mb-6" style={{ color: "var(--brand-text-muted)" }}>You do not have permission to access this page.</p>
          <Button onClick={() => navigate("/")} variant="default">
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  const stats = submissions ? [
    {
      label: "Total Submissions",
      value: submissions.length,
      icon: Mail,
      color: "bg-[var(--brand-gray-100)] text-[var(--brand-black)]",
    },
    {
      label: "New",
      value: submissions.filter((s: ContactSubmission) => s.status === "new").length,
      icon: Clock,
      color: "bg-[var(--brand-gray-100)] text-[var(--brand-gray-800)]",
    },
    {
      label: "Contacted",
      value: submissions.filter((s: ContactSubmission) => s.status === "contacted").length,
      icon: CheckCircle,
      color: "bg-[var(--brand-gray-100)] text-[var(--brand-gray-800)]",
    },
    {
      label: "Archived",
      value: submissions.filter((s: ContactSubmission) => s.status === "archived").length,
      icon: Users,
      color: "bg-[var(--brand-gray-100)] text-[var(--brand-gray-700)]",
    },
  ] : [];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--brand-parchment)" }}>
      {/* Header */}
      <header className="sticky top-0 z-50" style={{ backgroundColor: "var(--brand-surface)", borderBottom: "1px solid var(--brand-border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: "var(--brand-ink)" }}>Admin Dashboard</h1>
            <p className="text-sm mt-1" style={{ color: "var(--brand-text-muted)" }}>Welcome, {user.name || user.email}</p>
          </div>
          <Button
            onClick={() => {
              logout();
              navigate("/");
            }}
            variant="outline"
            className="flex items-center gap-2"
          >
            <LogOut size={16} />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium" style={{ color: "var(--brand-text-muted)" }}>{stat.label}</p>
                    <p className="text-3xl font-bold mt-2" style={{ color: "var(--brand-ink)" }}>{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon size={24} />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 hover:shadow-lg transition cursor-pointer" onClick={() => navigate("/admin/contact-submissions")}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold" style={{ color: "var(--brand-ink)" }}>Contact Submissions</h3>
                <p className="text-sm mt-2" style={{ color: "var(--brand-text-muted)" }}>View and manage all customer inquiries</p>
              </div>
              <Mail size={32} style={{ color: "var(--brand-champagne)" }} />
            </div>
          </Card>

          <Card className="p-6 opacity-50">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold" style={{ color: "var(--brand-ink)" }}>Journeys Management</h3>
                <p className="text-sm mt-2" style={{ color: "var(--brand-text-muted)" }}>Coming soon...</p>
              </div>
              <Users size={32} style={{ color: "var(--brand-border)" }} />
            </div>
          </Card>
        </div>

        {/* Recent Submissions */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--brand-ink)" }}>Recent Submissions</h2>
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="animate-spin" size={32} />
            </div>
          ) : submissions && submissions.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--brand-border)" }}>
                    <th className="text-left py-3 px-4 font-semibold" style={{ color: "var(--brand-ink-3)" }}>Name</th>
                    <th className="text-left py-3 px-4 font-semibold" style={{ color: "var(--brand-ink-3)" }}>Email</th>
                    <th className="text-left py-3 px-4 font-semibold" style={{ color: "var(--brand-ink-3)" }}>Status</th>
                    <th className="text-left py-3 px-4 font-semibold" style={{ color: "var(--brand-ink-3)" }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.slice(0, 5).map((submission: ContactSubmission) => (
                    <tr key={submission.id} className="cursor-pointer" style={{ borderBottom: "1px solid rgba(216, 210, 198, 0.55)" }} onClick={() => navigate("/admin/contact-submissions")}>
                      <td className="py-3 px-4" style={{ color: "var(--brand-ink)" }}>{submission.name}</td>
                      <td className="py-3 px-4" style={{ color: "var(--brand-text-muted)" }}>{submission.email}</td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          submission.status === "new" ? "bg-[var(--brand-gray-100)] text-[var(--brand-gray-800)]" :
                          submission.status === "contacted" ? "bg-[var(--brand-gray-100)] text-[var(--brand-gray-800)]" :
                          "bg-[var(--brand-gray-100)] text-[var(--brand-gray-700)]"
                        }`}>
                          {submission.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm" style={{ color: "var(--brand-text-muted)" }}>
                        {new Date(submission.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center py-8" style={{ color: "var(--brand-text-muted)" }}>No submissions yet</p>
          )}
          {submissions && submissions.length > 5 && (
            <Button
              onClick={() => navigate("/admin/contact-submissions")}
              variant="outline"
              className="w-full mt-4"
            >
              View All Submissions
            </Button>
          )}
        </Card>
      </main>
    </div>
  );
}
