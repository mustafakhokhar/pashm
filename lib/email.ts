/**
 * Email transport — wraps Resend.
 *
 * Behaviour:
 *  - If RESEND_API_KEY is set, sends a real email.
 *  - If not set, logs the email to the server console and returns { ok: true }.
 *    This means forms work end-to-end in local dev without setup.
 *
 * To wire up real emails:
 *  1. Sign up at resend.com, create an API key
 *  2. Add to .env.local:
 *       RESEND_API_KEY=re_xxxx
 *       PASHM_FROM_EMAIL=hello@your-verified-domain.com
 *       TRADE_INBOX=trade@your-domain.com
 *       PRIVATE_INBOX=private@your-domain.com
 *  3. Verify your sending domain in Resend
 */

import { Resend } from "resend";
import type { ActionResult } from "./actions";

type SendOptions = {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
};

export async function sendEmail({
  to,
  replyTo,
  subject,
  text,
}: SendOptions): Promise<ActionResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.PASHM_FROM_EMAIL ?? "onboarding@resend.dev";

  // No API key — log and return ok (useful in local dev)
  if (!apiKey) {
    console.log("\n----- PASHM email (dev mode, no API key) -----");
    console.log(`To:       ${to}`);
    console.log(`Reply-to: ${replyTo}`);
    console.log(`Subject:  ${subject}`);
    console.log("---");
    console.log(text);
    console.log("----- end -----\n");
    return { ok: true };
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      replyTo,
      subject,
      text,
    });
    if (result.error) {
      console.error("Resend error:", result.error);
      return { ok: false, error: result.error.message ?? "Email send failed" };
    }
    return { ok: true };
  } catch (err) {
    console.error("Email send threw:", err);
    return { ok: false, error: "Email send failed" };
  }
}
