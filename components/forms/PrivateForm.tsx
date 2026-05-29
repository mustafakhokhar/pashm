"use client";

import { useTransition, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { submitPrivateInquiry } from "@/lib/actions";
import { QuietButton } from "../QuietButton";
import { getPieceBySlug } from "@/content/data";

/**
 * PrivateForm — for individuals and households.
 *
 * Different shape from Trade: warmer copy, fewer fields, an open-ended
 * "what are you hoping for" message field is the centrepiece.
 *
 * If arrived from a piece detail page via /inquire/private?piece=<slug>,
 * a pre-fill banner appears at the top of the form referencing the piece.
 */

function PrivateFormInner() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const searchParams = useSearchParams();
  const [pieceLabel, setPieceLabel] = useState<string | null>(null);

  useEffect(() => {
    const slug = searchParams.get("piece");
    if (slug) {
      const piece = getPieceBySlug(slug);
      if (piece) {
        setPieceLabel(`${piece.type} — ${piece.name} (${piece.vintage})`);
      }
    }
  }, [searchParams]);

  function handleSubmit(formData: FormData) {
    if (pieceLabel) formData.set("piece", pieceLabel);
    startTransition(async () => {
      const result = await submitPrivateInquiry(formData);
      setStatus(result.ok ? "success" : "error");
    });
  }

  if (status === "success") {
    return (
      <div className="grid grid-cols-[3fr_9fr] gap-20 pb-24 max-md:grid-cols-1 max-md:gap-8 max-md:pb-16">
        <div className="pt-[14px]">
          <div className="mb-5 text-[10px] uppercase tracking-ultra-wide text-stone">Sent</div>
        </div>
        <div>
          <p className="max-w-[48ch] text-[18px] leading-[1.7] text-ink">
            Thank you for writing. We will reply within seven working days, by the family.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      action={handleSubmit}
      className="grid grid-cols-[3fr_9fr] gap-20 pb-24 max-md:grid-cols-1 max-md:gap-8 max-md:pb-16"
    >
      <div className="pt-[14px]">
        <div className="mb-5 text-[10px] uppercase tracking-ultra-wide text-stone">
          Your enquiry
        </div>
        <p className="max-w-[28ch] font-serif text-[14px] font-light italic leading-[1.6] text-ink-soft">
          You do not need to know exactly what you want. A description is enough — we will write
          back with a conversation, not a quote.
        </p>
      </div>

      <div className="grid gap-9">
        {pieceLabel && (
          <div className="border-l-[3px] border-ink bg-bone-warm px-[22px] py-4 text-[14px] text-ink-soft">
            Enquiry regarding:{" "}
            <em className="font-serif italic text-ink">{pieceLabel}</em>
          </div>
        )}

        <div className="grid grid-cols-2 gap-9 max-md:grid-cols-1">
          <Field label="Your name" name="name" required />
          <Field label="Where you are writing from" name="location" required />
        </div>

        <div className="grid grid-cols-2 gap-9 max-md:grid-cols-1">
          <Field label="Email" name="email" type="email" required />
          <Field
            label="How you heard of us"
            name="source"
            placeholder="A name, a friend, a piece you saw"
          />
        </div>

        <TextareaField
          label="What are you hoping for?"
          name="message"
          hint="Write as much or as little as feels right."
          required
        />

        <div className="grid grid-cols-2 gap-9 max-md:grid-cols-1">
          <SelectField
            label="Timing"
            name="timing"
            options={[
              "No particular date",
              "Within this season",
              "For a specific occasion (please mention in the message)",
            ]}
          />
          <Field label="Phone (optional)" name="phone" type="tel" />
        </div>

        <div className="mt-[18px] flex items-center justify-between gap-6 border-t border-line-soft pt-9 max-md:flex-col max-md:items-start max-md:gap-[18px]">
          <span className="max-w-[36ch] font-serif text-[14px] font-light italic text-ink-soft">
            Replies arrive within seven working days, by the family.
          </span>
          <QuietButton type="submit">
            {isPending ? "Sending…" : "Send this to PASHM"}
          </QuietButton>
        </div>

        {status === "error" && (
          <p className="text-[13px] text-ink-soft">
            Something went wrong. Please try again, or write directly to private@pashm.example.
          </p>
        )}
      </div>
    </form>
  );
}

export function PrivateForm() {
  return (
    <Suspense fallback={<div className="py-16 text-ink-soft">Loading…</div>}>
      <PrivateFormInner />
    </Suspense>
  );
}

/* ---- Field primitives (identical to TradeForm — could be extracted but
        kept local for now since the forms might diverge over time) ---- */

function Field(props: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col">
      <label className="mb-3 text-[10px] uppercase tracking-widest text-stone">
        {props.label}
      </label>
      <input
        type={props.type ?? "text"}
        name={props.name}
        required={props.required}
        placeholder={props.placeholder}
        className="border-b border-ink-soft bg-transparent px-0 py-2 pb-3 font-sans text-[17px] font-light tracking-[-0.005em] text-ink transition-colors focus:border-ink focus:outline-none"
      />
    </div>
  );
}

function SelectField(props: { label: string; name: string; options: string[] }) {
  return (
    <div className="flex flex-col">
      <label className="mb-3 text-[10px] uppercase tracking-widest text-stone">
        {props.label}
      </label>
      <select
        name={props.name}
        className="appearance-none border-b border-ink-soft bg-transparent bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2212%22%20height=%228%22%20viewBox=%220%200%2012%208%22><path%20d=%22M1%201l5%205%205-5%22%20stroke=%22%2318140F%22%20stroke-width=%221%22%20fill=%22none%22/></svg>')] bg-[right_4px_center] bg-no-repeat px-0 py-2 pb-3 pr-6 font-sans text-[17px] font-light tracking-[-0.005em] text-ink transition-colors focus:border-ink focus:outline-none"
      >
        {props.options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function TextareaField(props: {
  label: string;
  name: string;
  hint?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <label className="mb-3 text-[10px] uppercase tracking-widest text-stone">
        {props.label}
      </label>
      <textarea
        name={props.name}
        required={props.required}
        rows={4}
        className="min-h-[100px] resize-y border-b border-ink-soft bg-transparent px-0 py-2 pb-3 font-sans text-[17px] font-light leading-[1.5] tracking-[-0.005em] text-ink transition-colors focus:border-ink focus:outline-none"
      />
      {props.hint && (
        <span className="mt-2 font-serif text-[12px] font-light italic text-stone">
          {props.hint}
        </span>
      )}
    </div>
  );
}
