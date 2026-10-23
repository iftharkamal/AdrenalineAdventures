"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import BlogPostList from "@/components/blog-post-list";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/lib/blog-posts";
import { cn } from "@/lib/utils";

const transition = "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";

// Shows the first few posts, with a toggle underneath that reveals the rest in place
export default function ExpandablePostList({ posts, initialCount = 4 }: { posts: BlogPost[]; initialCount?: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMore = posts.length > initialCount;
  const label = isExpanded ? "Show less" : "View all";

  return (
    <div>
      <BlogPostList posts={isExpanded ? posts : posts.slice(0, initialCount)} revealFrom={isExpanded ? initialCount : 0} />
      {hasMore && (
        <Button
          variant="outline-ink"
          onClick={() => setIsExpanded((expanded) => !expanded)}
          aria-expanded={isExpanded}
          className="group/view relative isolate mt-12 h-12 overflow-hidden px-5 hover:border-line focus-visible:ring-offset-stone"
        >
          {/* White fill wipes up from the bottom edge on hover and drops back down on leave */}
          <span
            aria-hidden="true"
            className={cn(
              "absolute inset-0 -z-10 translate-y-full bg-paper group-hover/view:translate-y-0 group-focus-visible/view:translate-y-0",
              transition
            )}
          />
          {/* Label rolls up: the copy below slides into view as the original leaves through the top */}
          <span className="relative block h-[1.23em] overflow-hidden">
            <span
              className={cn(
                "flex flex-col group-hover/view:-translate-y-1/2 group-focus-visible/view:-translate-y-1/2",
                transition
              )}
            >
              <span>{label}</span>
              <span aria-hidden="true">{label}</span>
            </span>
          </span>
          {/* Plus spins a quarter turn on hover and settles as a cross while the list is open */}
          <Plus
            className={cn(
              "transition-[rotate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isExpanded
                ? "rotate-45 group-hover/view:rotate-135 group-focus-visible/view:rotate-135"
                : "group-hover/view:rotate-90 group-focus-visible/view:rotate-90"
            )}
          />
        </Button>
      )}
    </div>
  );
}
