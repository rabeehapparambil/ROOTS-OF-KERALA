"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useMemo, useState } from "react";
import SectionShell from "@/components/layout/SectionShell";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { bookingLinks, siteContent } from "@/content/site-content";
import { buildBookingHref, buildInquiryMessage, cn } from "@/lib/utils";
import type { InquiryFormValues } from "@/types/content";

type InquiryErrors = Partial<Record<keyof InquiryFormValues, string>>;

const channelStyles = {
  whatsapp:
    "border-[rgba(47,111,80,0.22)] bg-[linear-gradient(180deg,rgba(241,249,239,0.98),rgba(224,239,221,0.94))] text-coconut",
  instagram:
    "border-[rgba(153,128,78,0.24)] bg-[linear-gradient(180deg,rgba(251,246,236,0.98),rgba(239,230,205,0.94))] text-coconut",
  email:
    "border-[rgba(35,55,43,0.18)] bg-[rgba(255,251,246,0.94)] text-coconut",
  airbnb:
    "border-[rgba(92,120,89,0.22)] bg-[linear-gradient(180deg,rgba(244,250,240,0.98),rgba(225,237,220,0.94))] text-coconut",
} as const;

const channelTaglines = {
  whatsapp: "Fastest reply",
  instagram: "See recent moments",
  email: "Best for details",
  airbnb: "Marketplace option",
} as const;

const initialValues: InquiryFormValues = {
  name: "",
  country: "",
  dates: "",
  guests: "",
  message: "",
};

type FieldChangeHandler<T extends HTMLInputElement | HTMLTextAreaElement> = (
  event: ChangeEvent<T>,
) => void;

export default function BookingContact() {
  const [values, setValues] = useState<InquiryFormValues>(initialValues);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<"idle" | "error" | "ready">("idle");
  const [preparedLinks, setPreparedLinks] = useState<{
    whatsapp: string;
    email: string;
    preview: string;
  } | null>(null);

  const whatsappChannel = useMemo(
    () => bookingLinks.find((channel) => channel.kind === "whatsapp"),
    [],
  );
  const emailChannel = useMemo(
    () => bookingLinks.find((channel) => channel.kind === "email"),
    [],
  );
  const instagramChannel = useMemo(
    () => bookingLinks.find((channel) => channel.kind === "instagram"),
    [],
  );
  const airbnbChannel = useMemo(
    () => bookingLinks.find((channel) => channel.kind === "airbnb"),
    [],
  );

  const handleChange =
    (field: keyof InquiryFormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({
        ...current,
        [field]: event.target.value,
      }));

      if (errors[field]) {
        setErrors((current) => ({
          ...current,
          [field]: undefined,
        }));
      }
    };

  const validate = () => {
    const nextErrors: InquiryErrors = {};

    if (!values.name.trim()) nextErrors.name = "Please share your name.";
    if (!values.country.trim()) nextErrors.country = "Tell us where you are travelling from.";
    if (!values.dates.trim()) nextErrors.dates = "Add the dates you have in mind.";
    if (!values.message.trim()) nextErrors.message = "A short note helps us respond thoughtfully.";

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0 || !whatsappChannel || !emailChannel) {
      setErrors(nextErrors);
      setPreparedLinks(null);
      setStatus("error");
      return;
    }

    const preview = buildInquiryMessage(
      values,
      siteContent.brand.name,
      siteContent.brand.location,
    );

    setPreparedLinks({
      whatsapp: buildBookingHref(
        whatsappChannel,
        values,
        siteContent.brand.name,
        siteContent.brand.location,
      ),
      email: buildBookingHref(
        emailChannel,
        values,
        siteContent.brand.name,
        siteContent.brand.location,
      ),
      preview,
    });
    setErrors({});
    setStatus("ready");
  };

  return (
    <SectionShell id="booking" className="pb-24">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-14">
        <div className="min-w-0 rounded-[1.8rem] border border-[color:var(--line)] bg-coconut p-6 text-[rgba(255,248,240,0.95)] shadow-[0_30px_80px_rgba(46,31,21,0.16)] sm:rounded-[2.2rem] sm:p-10">
          <SectionEyebrow className="border-white/15 bg-white/10 text-[rgba(244,227,198,0.9)] shadow-none">
            {siteContent.booking.eyebrow}
          </SectionEyebrow>

          <h2 className="mt-5 text-balance font-serif text-3xl leading-tight sm:mt-6 sm:text-5xl">
            {siteContent.booking.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-[rgba(255,242,232,0.78)] sm:text-lg sm:leading-8">
            {siteContent.booking.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {bookingLinks.map((link) => (
              <a
                key={link.kind}
                href={link.href}
                target={link.kind === "email" ? undefined : "_blank"}
                rel={link.kind === "email" ? undefined : "noreferrer"}
                className={cn(
                  "group block rounded-[1.45rem] border px-4 py-4 shadow-[0_24px_60px_rgba(22,34,26,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(22,34,26,0.22)] sm:rounded-[1.7rem] sm:px-5 sm:py-5",
                  channelStyles[link.kind],
                )}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-palm">
                      {link.label}
                    </p>
                    <p className="mt-2 text-base font-semibold leading-6 text-coconut sm:mt-3 sm:text-lg sm:leading-7">
                      {link.cta}
                    </p>
                  </div>
                  <span className="inline-flex w-fit rounded-full border border-[rgba(35,55,43,0.1)] bg-white/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-coconut">
                    {channelTaglines[link.kind]}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-[rgba(32,49,38,0.76)]">
                  {link.description}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-6 rounded-[1.35rem] border border-white/12 bg-white/8 p-4 text-sm leading-7 text-[rgba(255,242,232,0.78)] sm:rounded-[1.6rem] sm:p-5">
            <p className="font-medium text-[rgba(255,248,240,0.96)]">
              Direct contact works best here.
            </p>
            <p className="mt-2">
              Use WhatsApp for the quickest response, email for longer trip notes, Airbnb if you
              want marketplace familiarity, or Instagram if you want to see the latest atmosphere
              before you reach out.
            </p>
          </div>

          <p className="mt-6 text-sm leading-7 text-[rgba(255,242,232,0.74)]">
            {siteContent.booking.helperText}
          </p>
        </div>

        <div className="min-w-0 rounded-[1.8rem] border border-[color:var(--line)] bg-[rgba(255,251,245,0.78)] p-5 shadow-[0_24px_70px_var(--shadow)] sm:rounded-[2.2rem] sm:p-8">
          <div className="max-w-3xl">
            <h3 className="font-serif text-[1.9rem] text-coconut sm:text-3xl">
              {siteContent.booking.formTitle}
            </h3>
            <p className="mt-3 text-base leading-7 text-text-soft">
              {siteContent.booking.formDescription}
            </p>
          </div>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label={siteContent.booking.fields.name.label}
                placeholder={siteContent.booking.fields.name.placeholder}
                value={values.name}
                onChange={handleChange("name")}
                error={errors.name}
                required
              />
              <Field
                label={siteContent.booking.fields.country.label}
                placeholder={siteContent.booking.fields.country.placeholder}
                value={values.country}
                onChange={handleChange("country")}
                error={errors.country}
                required
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label={siteContent.booking.fields.dates.label}
                placeholder={siteContent.booking.fields.dates.placeholder}
                value={values.dates}
                onChange={handleChange("dates")}
                error={errors.dates}
                required
              />
              <Field
                label={siteContent.booking.fields.guests.label}
                placeholder={siteContent.booking.fields.guests.placeholder}
                value={values.guests ?? ""}
                onChange={handleChange("guests")}
                error={errors.guests}
              />
            </div>

            <Field
              label={siteContent.booking.fields.message.label}
              placeholder={siteContent.booking.fields.message.placeholder}
              value={values.message}
              onChange={handleChange("message")}
              error={errors.message}
              required
              multiline
            />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button type="submit" variant="primary" className="w-full sm:w-auto">
                {siteContent.booking.submitLabel}
              </Button>
              <p className="text-sm leading-6 text-text-soft">
                We keep this personal: your message is prepared for direct handoff, not sent to an
                automated booking system.
              </p>
            </div>
          </form>

          <div
            aria-live="polite"
            className={cn(
              "mt-6 rounded-[1.6rem] border p-5 text-sm leading-7",
              status === "ready"
                ? "border-[rgba(82,99,79,0.22)] bg-[rgba(82,99,79,0.08)] text-coconut"
                : "border-[color:var(--line)] bg-white/56 text-text-soft",
            )}
          >
            {status === "ready" && preparedLinks ? (
              <div>
                <p className="font-serif text-2xl text-coconut">
                  {siteContent.booking.successTitle}
                </p>
                <p className="mt-2">{siteContent.booking.successDescription}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Button
                    href={preparedLinks.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    fullWidth
                  >
                    Open WhatsApp
                  </Button>
                  <Button
                    href={preparedLinks.email}
                    variant="secondary"
                    target="_blank"
                    rel="noreferrer"
                    fullWidth
                  >
                    Open Email Draft
                  </Button>
                  {instagramChannel ? (
                    <Button
                      href={instagramChannel.href}
                      variant="secondary"
                      target="_blank"
                      rel="noreferrer"
                      fullWidth
                    >
                      Open Instagram
                    </Button>
                  ) : null}
                  {airbnbChannel ? (
                    <Button
                      href={airbnbChannel.href}
                      variant="secondary"
                      target="_blank"
                      rel="noreferrer"
                      fullWidth
                    >
                      Open Airbnb
                    </Button>
                  ) : null}
                </div>
                <pre className="mt-5 overflow-x-auto rounded-[1.1rem] border border-[rgba(82,99,79,0.14)] bg-white/60 p-3 font-sans text-xs leading-6 whitespace-pre-wrap sm:rounded-[1.25rem] sm:p-4 sm:text-sm">
                  {preparedLinks.preview}
                </pre>
              </div>
            ) : status === "error" ? (
              <p>Please complete the highlighted fields so we can prepare your inquiry.</p>
            ) : (
              <p>
                Once you prepare the inquiry, your details will open in WhatsApp or email with a
                warm, ready-to-send message.
              </p>
            )}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

interface FieldProps {
  error?: string;
  label: string;
  multiline?: boolean;
  onChange: FieldChangeHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder: string;
  required?: boolean;
  value: string;
}

function Field({
  error,
  label,
  multiline = false,
  onChange,
  placeholder,
  required,
  value,
}: FieldProps) {
  const baseClass =
    "mt-2 w-full rounded-[1.25rem] border bg-white/82 px-4 py-3 text-base text-coconut shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] placeholder:text-[rgba(111,98,85,0.72)]";

  return (
    <label className="block text-sm font-medium text-coconut">
      {label}
      {multiline ? (
        <textarea
          className={cn(baseClass, "min-h-36 resize-y", error && "border-[rgba(155,57,45,0.48)]")}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <input
          className={cn(baseClass, error && "border-[rgba(155,57,45,0.48)]")}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
      {error ? <span className="mt-2 block text-sm text-[#8b3d2c]">{error}</span> : null}
    </label>
  );
}
