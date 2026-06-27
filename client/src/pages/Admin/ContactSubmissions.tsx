import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, ChevronDown, ChevronUp } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";
import type { ContactSubmission } from "../../../../drizzle/schema";

export default function ContactSubmissions() {
  const { user, loading: authLoading } = useAuth();
  const [, navigate] = useLocation();
  const [expandedId, setExpandedId] = useState<number | null>(null);

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
      <div className="flex items-center justify-center min-h-screen">
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

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Contact Form Submissions</h1>
          <p className="text-gray-600 mt-2">Manage and respond to customer inquiries</p>
        </div>

        <SubmissionsList />
      </div>
    </div>
  );
}

function SubmissionsList() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const { data: submissions, isLoading, refetch } = trpc.contact.getSubmissions.useQuery();
  const updateStatusMutation = trpc.contact.updateStatus.useMutation({
    onSuccess: () => refetch(),
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="animate-spin" size={32} />
      </div>
    );
  }

  if (!submissions || submissions.length === 0) {
    return (
      <Card className="p-8 text-center">
        <p className="text-gray-600">No submissions yet</p>
      </Card>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "contacted":
        return "bg-green-100 text-green-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-4">
      {submissions.map((submission: ContactSubmission) => (
        <Card key={submission.id} className="overflow-hidden">
          <div
            className="p-6 cursor-pointer hover:bg-gray-50 transition"
            onClick={() => setExpandedId(expandedId === submission.id ? null : submission.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{submission.name}</h3>
                  <Badge className={getStatusColor(submission.status)}>
                    {submission.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{submission.email}</p>
                {submission.phone && (
                  <p className="text-sm text-gray-600">{submission.phone}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">
                  {new Date(submission.createdAt).toLocaleDateString()}
                </span>
                {expandedId === submission.id ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
            </div>
          </div>

          {expandedId === submission.id && (
            <div className="border-t bg-gray-50 p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {submission.country && (
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Country</label>
                    <p className="text-gray-600">{submission.country}</p>
                  </div>
                )}
                {submission.travelersCount && (
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Number of Travelers</label>
                    <p className="text-gray-600">{submission.travelersCount}</p>
                  </div>
                )}
                {submission.estimatedTravelTime && (
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Travel Time</label>
                    <p className="text-gray-600">{submission.estimatedTravelTime}</p>
                  </div>
                )}
                {submission.budgetRange && (
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Budget Range</label>
                    <p className="text-gray-600">{submission.budgetRange}</p>
                  </div>
                )}
              </div>

              {submission.travelStyle && (
                <div className="mb-6">
                  <label className="text-sm font-semibold text-gray-700">Travel Style</label>
                  <p className="text-gray-600">{submission.travelStyle}</p>
                </div>
              )}

              <div className="mb-6">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <div className="mt-2 p-4 bg-white rounded border border-gray-200">
                  <p className="text-gray-700 whitespace-pre-wrap">{submission.message}</p>
                </div>
              </div>

              <div className="flex gap-3">
                {submission.status !== "contacted" && (
                  <Button
                    onClick={() =>
                      updateStatusMutation.mutate({
                        id: submission.id,
                        status: "contacted",
                      })
                    }
                    disabled={updateStatusMutation.isPending}
                    variant="default"
                  >
                    {updateStatusMutation.isPending ? (
                      <Loader2 className="animate-spin mr-2" size={16} />
                    ) : null}
                    Mark as Contacted
                  </Button>
                )}
                {submission.status !== "archived" && (
                  <Button
                    onClick={() =>
                      updateStatusMutation.mutate({
                        id: submission.id,
                        status: "archived",
                      })
                    }
                    disabled={updateStatusMutation.isPending}
                    variant="outline"
                  >
                    Archive
                  </Button>
                )}
              </div>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
