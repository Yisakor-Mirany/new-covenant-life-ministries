import type { PaymentMethod } from "@/types";
import { getIcon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

export function PaymentMethodGrid({
  methods,
  selected,
  onSelect,
}: {
  methods: PaymentMethod[];
  selected: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {methods.map((method) => {
        const Icon = getIcon(method.icon);
        const active = selected === method.id;
        return (
          <button
            key={method.id}
            type="button"
            onClick={() => onSelect(method.id)}
            aria-pressed={active}
            className={cn(
              "flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-colors",
              active
                ? "border-primary bg-primary/5 text-primary"
                : "border-border bg-card hover:border-primary/40"
            )}
          >
            <Icon className="h-6 w-6" />
            <span className="text-xs font-medium leading-tight">{method.label}</span>
          </button>
        );
      })}
    </div>
  );
}
