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
  Gift,
  Landmark,
  Globe,
  HandCoins,
  CreditCard,
  Wallet,
  Smartphone,
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
  Gift,
  Landmark,
  Globe,
  HandCoins,
  CreditCard,
  Wallet,
  Smartphone,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
