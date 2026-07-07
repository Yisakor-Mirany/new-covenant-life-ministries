import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject."),
  message: z.string().min(10, "Please share a bit more detail (10+ characters)."),
});

export const volunteerSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(6, "Please enter a valid phone number."),
  interest: z.string().min(1, "Please select an area of interest."),
  message: z.string().optional(),
});

export const prayerRequestSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  request: z.string().min(10, "Please share your prayer request (10+ characters)."),
  confidential: z.boolean().optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export const orderSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  note: z.string().optional(),
  addDonation: z.boolean().optional(),
  items: z
    .array(
      z.object({
        slug: z.string(),
        title: z.string(),
        format: z.string(),
        price: z.number(),
        quantity: z.number().min(1),
      })
    )
    .min(1, "Your cart is empty."),
});

export const donationSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  phone: z.string().min(6, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  country: z.string().min(1, "Please select your country."),
  frequency: z.enum(["One Time", "Monthly", "Quarterly", "Yearly"]),
  amount: z.number().min(1, "Please choose or enter a donation amount."),
  currency: z.string(),
  purpose: z.string().min(1, "Please select a donation purpose."),
  region: z.enum(["international", "local"]),
  paymentMethod: z.string().min(1, "Please select a payment method."),
  anonymous: z.boolean().optional(),
  coverFees: z.boolean().optional(),
  receiveUpdates: z.boolean().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type VolunteerInput = z.infer<typeof volunteerSchema>;
export type PrayerRequestInput = z.infer<typeof prayerRequestSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type OrderInput = z.infer<typeof orderSchema>;
export type DonationInput = z.infer<typeof donationSchema>;
