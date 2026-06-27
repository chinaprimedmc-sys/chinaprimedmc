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
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-6">You do not have permission to access this page.</p>
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
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "New",
      value: submissions.filter((s: ContactSubmission) => s.status === "new").length,
      icon: Clock,
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      label: "Contacted",
      value: submissions.filter((s: ContactSubmission) => s.status === "contacted").length,
      icon: CheckCircle,
      color: "bg-green-50 text-green-600",
    },
    {
      label: "Archived",
      value: submissions.filter((s: ContactSubmission) => s.status === "archived").length,
      icon: Users,
      color: "bg-gray-50 text-gray-600",
    },
  ] : [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-sm text-gray-600 mt-1">Welcome, {user.name || user.email}</p>
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
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
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
                <h3 className="text-lg font-semibold text-gray-900">Contact Submissions</h3>
                <p className="text-sm text-gray-600 mt-2">View and manage all customer inquiries</p>
              </div>
              <Mail size={32} className="text-blue-600" />
            </div>
          </Card>

          <Card className="p-6 opacity-50">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Journeys Management</h3>
                <p className="text-sm text-gray-600 mt-2">Coming soon...</p>
              </div>
              <Users size={32} className="text-gray-400" />
            </div>
          </Card>
        </div>

        {/* Recent Submissions */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Submissions</h2>
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="animate-spin" size={32} />
            </div>
          ) : submissions && submissions.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.slice(0, 5).map((submission: ContactSubmission) => (
                    <tr key={submission.id} className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer" onClick={() => navigate("/admin/contact-submissions")}>
                      <td className="py-3 px-4 text-gray-900">{submission.name}</td>
                      <td className="py-3 px-4 text-gray-600">{submission.email}</td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          submission.status === "new" ? "bg-blue-100 text-blue-800" :
                          submission.status === "contacted" ? "bg-green-100 text-green-800" :
                          "bg-gray-100 text-gray-800"
                        }`}>
                          {submission.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-600 text-sm">
                        {new Date(submission.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-600 text-center py-8">No submissions yet</p>
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
