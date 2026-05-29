"use client";

import { useTransition, useState } from "react";
import { submitTradeInquiry } from "@/lib/actions";
import { QuietButton } from "../QuietButton";

/**
 * TradeForm — for mills, processors, ateliers, retailers.
 *
 * The fields ask technical questions: capacity, timeline, what they make.
 * Voice is plainspoken. Submission uses a server action defined in lib/actions.ts
 * which sends an email via Resend (or no-ops gracefully if no API key is set,
 * which is the case in local dev until you add one).
 */

export function TradeForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await submitTradeInquiry(formData);
      setStatus(result.ok ? "success" : "error");
    });
  }

  if (status === "success") {
    return (
      <div className="grid grid-cols-[3fr_9fr] gap-20 pb-24 max-md:grid-cols-1 max-md:gap-8 max-md:pb-16">
        <div className="pt-[14px]">
          <div className="mb-5 text-[10px] uppercase tracking-ultra-wide text-stone">
            Sent
          </div>
        </div>
        <div>
          <p className="max-w-[48ch] text-[18px] leading-[1.7] text-ink">
            Thank you. Your enquiry has reached us. We will write back within five working days,
            by name.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="grid grid-cols-[3fr_9fr] gap-20 pb-24 max-md:grid-cols-1 max-md:gap-8 max-md:pb-16">
      <div className="pt-[14px]">
        <div className="mb-5 text-[10px] uppercase tracking-ultra-wide text-stone">
          Your details
        </div>
        <p className="max-w-[28ch] font-serif text-[14px] font-light italic leading-[1.6] text-ink-soft">
          The more you tell us about your house and what you are looking for, the better the
          first reply will be.
        </p>
      </div>

      <div className="grid gap-9">
        <div className="grid grid-cols-2 gap-9 max-md:grid-cols-1">
          <Field label="Your name" name="name" required />
          <Field label="House / company" name="company" required />
        </div>

        <div className="grid grid-cols-2 gap-9 max-md:grid-cols-1">
          <Field label="Country" name="country" required />
          <Field label="Email" name="email" type="email" required />
        </div>

        <div className="grid grid-cols-2 gap-9 max-md:grid-cols-1">
          <SelectField
            label="What you are seeking"
            name="seeking"
            options={[
              "Raw fibre, by the kilo",
              "Spun yarn, by the kilo",
              "Finished pieces, small lots",
              "A combination — let me describe",
            ]}
          />
          <Field label="Indicative capacity" name="capacity" placeholder="e.g. 20 kg, or 50 pieces" />
        </div>

        <div className="grid grid-cols-2 gap-9 max-md:grid-cols-1">
          <SelectField
            label="Timeline"
            name="timeline"
            options={[
              "This harvest (Spring 2026)",
              "Next harvest (Spring 2027)",
              "Ongoing / annual",
              "Exploratory — no firm date",
            ]}
          />
          <Field label="How you found us" name="source" placeholder="Optional" />
        </div>

        <TextareaField
          label="A few lines about your house and your work"
          name="message"
          hint="A paragraph is enough. We will follow up by email."
          required
        />

        <div className="mt-[18px] flex items-center justify-between gap-6 border-t border-line-soft pt-9 max-md:flex-col max-md:items-start max-md:gap-[18px]">
          <span className="max-w-[36ch] font-serif text-[14px] font-light italic text-ink-soft">
            Replies arrive within five working days, by the family.
          </span>
          <QuietButton type="submit">
            {isPending ? "Sending…" : "Send this to PASHM"}
          </QuietButton>
        </div>

        {status === "error" && (
          <p className="text-[13px] text-ink-soft">
            Something went wrong. Please try again, or write directly to trade@pashm.example.
          </p>
        )}
      </div>
    </form>
  );
}

/* ---- Small field primitives ---- */

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
