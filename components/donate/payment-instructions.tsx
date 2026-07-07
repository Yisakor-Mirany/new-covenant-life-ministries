import { QrCode } from "lucide-react";

import type { PaymentMethod } from "@/types";
import { Card } from "@/components/ui/card";

export function PaymentInstructions({ method }: { method: PaymentMethod }) {
  if (!method.instructions || method.instructions.length === 0) return null;

  return (
    <Card className="p-5">
      <p className="font-display font-semibold">{method.label} Payment Details</p>
      <p className="mt-1 text-xs text-muted-foreground">
        Placeholder details shown below — your team can update these at any time.
      </p>
      <div className="mt-4 space-y-2 text-sm">
        {method.instructions.map((line) => (
          <div key={line.label} className="flex items-center justify-between gap-3">
            <span className="text-muted-foreground">{line.label}</span>
            <span className="font-medium">{line.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-lg border border-dashed border-border p-3 text-xs text-muted-foreground">
        <QrCode className="h-8 w-8 shrink-0" />
        QR code will appear here once connected to a live merchant account.
      </div>
    </Card>
  );
}
