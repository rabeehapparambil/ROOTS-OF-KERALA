import type { BookingChannel, InquiryFormValues } from "@/types/content";

export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function buildInquiryMessage(
  values: InquiryFormValues,
  brandName: string,
  brandLocation: string,
) {
  const guestsLine = values.guests?.trim()
    ? `Guests: ${values.guests.trim()}`
    : undefined;

  return [
    `Hello ${brandName},`,
    "",
    `I would love to inquire about staying with your family homestay in ${brandLocation}.`,
    "",
    `Name: ${values.name.trim()}`,
    `Country: ${values.country.trim()}`,
    `Preferred dates: ${values.dates.trim()}`,
    guestsLine,
    "",
    "About this trip:",
    values.message.trim(),
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildBookingHref(
  channel: BookingChannel,
  values: InquiryFormValues,
  brandName: string,
  brandLocation: string,
) {
  const message = buildInquiryMessage(values, brandName, brandLocation);

  switch (channel.kind) {
    case "whatsapp":
      return `${channel.href}?text=${encodeURIComponent(message)}`;
    case "email":
      return `${channel.href}?subject=${encodeURIComponent(
        `Homestay inquiry for ${brandName}`,
      )}&body=${encodeURIComponent(message)}`;
    default:
      return channel.href;
  }
}
