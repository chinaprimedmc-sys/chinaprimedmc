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
      description="This route is not available yet. Start a conversation and we can suggest a suitable direction."
    />
  );
}

export function ComingSoonState() {
  return (
    <EmptyState
      icon={<Wrench size={20} />}
      title="Coming soon"
      description="This area is not available yet. Please return to the main planning pages."
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
