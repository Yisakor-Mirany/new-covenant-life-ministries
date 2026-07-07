import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-muted/30">
      <ol className="container-page flex flex-wrap items-center gap-1.5 py-3 text-sm text-muted-foreground">
        <li className="flex items-center gap-1.5">
          <Link href="/" className="flex items-center hover:text-primary">
            <Home className="h-3.5 w-3.5" />
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {item.href ? (
              <Link href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-foreground">{item.label}</span>
            )}
            {i < items.length - 1 && <ChevronRight className="h-3.5 w-3.5" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
