import { Compass, FileQuestion, SearchX, Wrench } from "lucide-react";

import { EmptyState } from "@/components/empty-states/empty-state";

export function NoResultsState() {
  return (
    <EmptyState
      icon={<SearchX size={20} />}
      title="No matching results yet"
      description="Try a broader search or reset the filters."
    />
  );
}

export function NoToursState() {
  return (
    <EmptyState
      icon={<Compass size={20} />}
      title="No journeys match this view"
      description="Future trip pages can use this state without inventing new styling."
    />
  );
}

export function ComingSoonState() {
  return (
    <EmptyState
      icon={<Wrench size={20} />}
      title="Coming soon"
      description="This area is reserved for a future sprint."
    />
  );
}

export function ErrorState() {
  return (
    <EmptyState
      icon={<FileQuestion size={20} />}
      title="Something needs another look"
      description="The interface can recover gracefully without breaking the brand experience."
    />
  );
}
