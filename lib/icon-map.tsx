import {
  Compass,
  HeartHandshake,
  Sparkles,
  Users,
  MapPin,
  GraduationCap,
  Church,
  Rocket,
  Map,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Compass,
  HeartHandshake,
  Sparkles,
  Users,
  MapPin,
  GraduationCap,
  Church,
  Rocket,
  Map,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
