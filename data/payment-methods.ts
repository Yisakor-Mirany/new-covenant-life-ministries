import type { PaymentMethod } from "@/types";
import { siteConfig } from "@/lib/constants";

export const internationalMethods: PaymentMethod[] = [
  { id: "stripe", label: "Stripe", region: "international", icon: "CreditCard" },
  { id: "paypal", label: "PayPal", region: "international", icon: "Wallet" },
  { id: "card", label: "Credit / Debit Card", region: "international", icon: "CreditCard" },
  { id: "apple-pay", label: "Apple Pay", region: "international", icon: "Smartphone" },
  { id: "google-pay", label: "Google Pay", region: "international", icon: "Smartphone" },
  {
    id: "intl-bank-transfer",
    label: "Bank Transfer",
    region: "international",
    icon: "Landmark",
    instructions: [
      { label: "Account Name", value: "New Covenant Life Ministries" },
      { label: "Bank", value: "Placeholder International Bank" },
      { label: "SWIFT / BIC", value: "PLHDXXXX" },
      { label: "IBAN", value: "XX00 0000 0000 0000 0000 00" },
    ],
  },
];

export const localMethods: PaymentMethod[] = [
  {
    id: "telebirr",
    label: "Telebirr",
    region: "local",
    icon: "Smartphone",
    instructions: [
      { label: "Merchant ID", value: "000000 (placeholder)" },
      { label: "Phone Number", value: siteConfig.phone },
      { label: "QR Code", value: "Available at checkout confirmation" },
    ],
  },
  {
    id: "cbe-birr",
    label: "CBE Birr",
    region: "local",
    icon: "Landmark",
    instructions: [{ label: "Merchant Number", value: "CBE-000000 (placeholder)" }],
  },
  {
    id: "awash-birr",
    label: "Awash Birr",
    region: "local",
    icon: "Landmark",
    instructions: [
      { label: "Account Number", value: "0000000000 (placeholder)" },
      { label: "QR Code", value: "Available at checkout confirmation" },
    ],
  },
  {
    id: "bank-of-abyssinia",
    label: "Bank of Abyssinia",
    region: "local",
    icon: "Landmark",
    instructions: [
      { label: "Account Name", value: "New Covenant Life Ministries" },
      { label: "Account Number", value: "0000000000 (placeholder)" },
      { label: "Swift Code", value: "ABYSETAA (placeholder)" },
    ],
  },
  {
    id: "coopay",
    label: "Coopay-Ebirr",
    region: "local",
    icon: "Smartphone",
    instructions: [{ label: "Merchant Account", value: "COOP-000000 (placeholder)" }],
  },
  {
    id: "amole",
    label: "Amole",
    region: "local",
    icon: "Smartphone",
    instructions: [{ label: "Merchant Account", value: "AMOLE-000000 (placeholder)" }],
  },
  {
    id: "hellocash",
    label: "HelloCash",
    region: "local",
    icon: "Smartphone",
    instructions: [{ label: "Merchant Account", value: "HELLO-000000 (placeholder)" }],
  },
  {
    id: "mpesa",
    label: "M-Pesa Ethiopia",
    region: "local",
    icon: "Smartphone",
    instructions: [{ label: "Till Number", value: "000000 (placeholder)" }],
  },
  {
    id: "local-bank-transfer",
    label: "Bank Transfer",
    region: "local",
    icon: "Landmark",
    instructions: [
      { label: "Account Name", value: "New Covenant Life Ministries" },
      { label: "Bank", value: "Commercial Bank of Ethiopia" },
      { label: "Account Number", value: "1000000000000 (placeholder)" },
    ],
  },
];

export const currencies = ["USD", "EUR", "GBP", "CAD"] as const;
export type Currency = (typeof currencies)[number];
