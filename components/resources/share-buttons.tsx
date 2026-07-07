"use client";

import { Link2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { FacebookIcon, XIcon } from "@/components/icons/social-icons";

export function ShareButtons({ title }: { title: string }) {
  function share(network: "facebook" | "twitter") {
    const url = window.location.href;
    const shareUrl =
      network === "facebook"
        ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        : `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=500");
  }

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard");
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground">Share:</span>
      <Button variant="outline" size="icon" onClick={() => share("facebook")} aria-label="Share on Facebook">
        <FacebookIcon className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={() => share("twitter")} aria-label="Share on X">
        <XIcon className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={copyLink} aria-label="Copy link">
        <Link2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
