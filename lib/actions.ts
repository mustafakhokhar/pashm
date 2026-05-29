"use server";

import { z } from "zod";
import { sendEmail } from "./email";

/**
 * Server actions for form submission.
 *
 * Two actions: submitTradeInquiry, submitPrivateInquiry.
 * Both validate input with Zod, then dispatch via lib/email.ts which uses Resend.
 *
 * If RESEND_API_KEY is not set in env, the action logs to console and returns
 * { ok: true } so local dev works without an API key.
 */

const tradeSchema = z.object({
  name: z.string().min(1).max(200),
  company: z.string().min(1).max(200),
  country: z.string().min(1).max(200),
  email: z.string().email(),
  seeking: z.string().min(1).max(200),
  capacity: z.string().max(200).optional(),
  timeline: z.string().min(1).max(200),
  source: z.string().max(200).optional(),
  message: z.string().min(1).max(5000),
});

const privateSchema = z.object({
  name: z.string().min(1).max(200),
  location: z.string().min(1).max(200),
  email: z.string().email(),
  source: z.string().max(200).optional(),
  message: z.string().min(1).max(5000),
  timing: z.string().max(200).optional(),
  phone: z.string().max(50).optional(),
  piece: z.string().max(300).optional(),
});

export type ActionResult = { ok: true } | { ok: false; error: string };

function formDataToObject(formData: FormData): Record<string, string> {
  const obj: Record<string, string> = {};
  formData.forEach((value, key) => {
    if (typeof value === "string") obj[key] = value;
  });
  return obj;
}

export async function submitTradeInquiry(formData: FormData): Promise<ActionResult> {
  const data = formDataToObject(formData);
  const parsed = tradeSchema.safeParse(data);
  if (!parsed.success) {
    return { ok: false, error: "Validation failed" };
  }

  const body = `
NEW TRADE INQUIRY — PASHM

Name:       ${parsed.data.name}
Company:    ${parsed.data.company}
Country:    ${parsed.data.country}
Email:      ${parsed.data.email}

Seeking:    ${parsed.data.seeking}
Capacity:   ${parsed.data.capacity ?? "—"}
Timeline:   ${parsed.data.timeline}
Source:     ${parsed.data.source ?? "—"}

Message:
${parsed.data.message}
  `.trim();

  return sendEmail({
    to: process.env.TRADE_INBOX ?? "trade@pashm.example",
    replyTo: parsed.data.email,
    subject: `Trade inquiry — ${parsed.data.company} (${parsed.data.country})`,
    text: body,
  });
}

export async function submitPrivateInquiry(formData: FormData): Promise<ActionResult> {
  const data = formDataToObject(formData);
  const parsed = privateSchema.safeParse(data);
  if (!parsed.success) {
    return { ok: false, error: "Validation failed" };
  }

  const pieceLine = parsed.data.piece
    ? `Regarding:  ${parsed.data.piece}\n\n`
    : "";

  const body = `
NEW PRIVATE INQUIRY — PASHM

${pieceLine}Name:       ${parsed.data.name}
Location:   ${parsed.data.location}
Email:      ${parsed.data.email}
Phone:      ${parsed.data.phone ?? "—"}
Source:     ${parsed.data.source ?? "—"}
Timing:     ${parsed.data.timing ?? "—"}

Message:
${parsed.data.message}
  `.trim();

  return sendEmail({
    to: process.env.PRIVATE_INBOX ?? "private@pashm.example",
    replyTo: parsed.data.email,
    subject: `Private enquiry — ${parsed.data.name}`,
    text: body,
  });
}
