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
          <p className="mb-6" style={{ color: "var(--brand-text-muted)" }}>You do not have permission to access this page.</p>
          <Button onClick={() => navigate("/")} variant="default">
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--brand-parchment)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold" style={{ color: "var(--brand-ink)" }}>Contact Form Submissions</h1>
          <p className="mt-2" style={{ color: "var(--brand-text-muted)" }}>Manage and respond to customer inquiries</p>
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
        <p style={{ color: "var(--brand-text-muted)" }}>No submissions yet</p>
      </Card>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-[var(--brand-gray-100)] text-[var(--brand-gray-800)]";
      case "contacted":
        return "bg-[var(--brand-gray-100)] text-[var(--brand-gray-800)]";
      case "archived":
        return "bg-[var(--brand-gray-100)] text-[var(--brand-gray-700)]";
      default:
        return "bg-[var(--brand-gray-100)] text-[var(--brand-gray-700)]";
    }
  };

  return (
    <div className="space-y-4">
      {submissions.map((submission: ContactSubmission) => (
        <Card key={submission.id} className="overflow-hidden">
          <div
            className="p-6 cursor-pointer transition"
            onClick={() => setExpandedId(expandedId === submission.id ? null : submission.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold" style={{ color: "var(--brand-ink)" }}>{submission.name}</h3>
                  <Badge className={getStatusColor(submission.status)}>
                    {submission.status}
                  </Badge>
                </div>
                <p className="text-sm" style={{ color: "var(--brand-text-muted)" }}>{submission.email}</p>
                {submission.phone && (
                  <p className="text-sm" style={{ color: "var(--brand-text-muted)" }}>{submission.phone}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm" style={{ color: "var(--brand-text-muted)" }}>
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
            <div className="border-t p-6" style={{ backgroundColor: "var(--brand-parchment)", borderColor: "var(--brand-border)" }}>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {submission.country && (
                  <div>
                    <label className="text-sm font-semibold" style={{ color: "var(--brand-ink-3)" }}>Country</label>
                    <p style={{ color: "var(--brand-text-muted)" }}>{submission.country}</p>
                  </div>
                )}
                {submission.travelersCount && (
                  <div>
                    <label className="text-sm font-semibold" style={{ color: "var(--brand-ink-3)" }}>Number of Travelers</label>
                    <p style={{ color: "var(--brand-text-muted)" }}>{submission.travelersCount}</p>
                  </div>
                )}
                {submission.estimatedTravelTime && (
                  <div>
                    <label className="text-sm font-semibold" style={{ color: "var(--brand-ink-3)" }}>Travel Time</label>
                    <p style={{ color: "var(--brand-text-muted)" }}>{submission.estimatedTravelTime}</p>
                  </div>
                )}
                {submission.budgetRange && (
                  <div>
                    <label className="text-sm font-semibold" style={{ color: "var(--brand-ink-3)" }}>Budget Range</label>
                    <p style={{ color: "var(--brand-text-muted)" }}>{submission.budgetRange}</p>
                  </div>
                )}
              </div>

              {submission.travelStyle && (
                <div className="mb-6">
                  <label className="text-sm font-semibold" style={{ color: "var(--brand-ink-3)" }}>Travel Style</label>
                  <p style={{ color: "var(--brand-text-muted)" }}>{submission.travelStyle}</p>
                </div>
              )}

              <div className="mb-6">
                <label className="text-sm font-semibold" style={{ color: "var(--brand-ink-3)" }}>Message</label>
                <div className="mt-2 p-4 rounded border" style={{ backgroundColor: "var(--brand-surface)", borderColor: "var(--brand-border)" }}>
                  <p className="whitespace-pre-wrap" style={{ color: "var(--brand-ink-3)" }}>{submission.message}</p>
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
