import { getAuthorByName } from "@/data/authors";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AuthorBio({ name }: { name: string }) {
  const author = getAuthorByName(name);
  if (!author) return null;

  return (
    <Card className="flex items-start gap-4 p-6">
      <Avatar className="h-14 w-14 shrink-0">
        <AvatarFallback>{author.initials}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-display font-semibold">{author.name}</p>
        <p className="text-xs font-medium text-primary">{author.role}</p>
        <p className="mt-2 text-sm text-muted-foreground">{author.bio}</p>
      </div>
    </Card>
  );
}
