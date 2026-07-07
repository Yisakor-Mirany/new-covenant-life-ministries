"use client";

import { Languages } from "lucide-react";

import { locales } from "@/lib/i18n/dictionaries";
import { useLanguage } from "@/providers/language-provider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <Select value={locale} onValueChange={(value) => setLocale(value as "en" | "am")}>
      <SelectTrigger
        aria-label="Select language"
        className="h-10 w-auto gap-2 rounded-full border-none bg-transparent px-3 shadow-none hover:bg-muted"
      >
        <Languages className="h-4 w-4" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {locales.map((l) => (
          <SelectItem key={l.code} value={l.code}>
            {l.nativeLabel}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
