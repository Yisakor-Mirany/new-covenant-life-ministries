import type { BookReview } from "@/types";
import { Card } from "@/components/ui/card";
import { StarRating } from "@/components/books/star-rating";
import { Reveal } from "@/components/shared/reveal";

export function BookReviewsList({ reviews }: { reviews: BookReview[] }) {
  if (reviews.length === 0) {
    return <p className="text-sm text-muted-foreground">No reviews yet — be the first to read and review this book.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {reviews.map((review, i) => (
        <Reveal key={review.name} delay={i * 0.06}>
          <Card className="h-full p-5">
            <StarRating rating={review.rating} />
            <p className="mt-3 text-sm text-muted-foreground">&ldquo;{review.comment}&rdquo;</p>
            <p className="mt-3 text-sm font-semibold">{review.name}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
