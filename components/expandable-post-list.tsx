"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import BlogPostList from "@/components/blog-post-list";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/lib/blog-posts";
import { cn } from "@/lib/utils";

// Shows the first few posts, with a toggle underneath that reveals the rest in place
export default function ExpandablePostList({ posts, initialCount = 4 }: { posts: BlogPost[]; initialCount?: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMore = posts.length > initialCount;

  return (
    <div>
      <BlogPostList posts={isExpanded ? posts : posts.slice(0, initialCount)} revealFrom={isExpanded ? initialCount : 0} />
      {hasMore && (
        <Button
          variant="outline-ink"
          onClick={() => setIsExpanded((expanded) => !expanded)}
          aria-expanded={isExpanded}
          className="group/view mt-12 h-12 px-5 focus-visible:ring-offset-stone"
        >
          {isExpanded ? "Show less" : "View all"}
          {/* Plus spins a quarter turn on hover and settles as a cross while the list is open */}
          <Plus
            className={cn(
              "transition-[rotate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isExpanded
                ? "rotate-45 group-hover/view:rotate-[135deg] group-focus-visible/view:rotate-[135deg]"
                : "group-hover/view:rotate-90 group-focus-visible/view:rotate-90"
            )}
          />
        </Button>
      )}
    </div>
  );
}
