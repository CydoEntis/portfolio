import { useState, type FormEvent } from "react";
import { CONTACT } from "@/content/site";

const ENDPOINT = "https://api.web3forms.com/submit";

type Status = "idle" | "sending" | "sent" | "failed";

const field =
  "rounded-none border border-line-chip bg-surface px-3.5 text-[15px] text-text outline-none transition-colors duration-150 placeholder:text-faint focus:border-lime";

async function send(accessKey: string, form: HTMLFormElement): Promise<boolean> {
  const data = Object.fromEntries(new FormData(form));
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...data,
      access_key: accessKey,
      subject: `New message from ${data.name} via codystine.com`,
    }),
  });
  const result: { success?: boolean } = await response.json();
  return response.ok && result.success === true;
}

export default function ContactForm({ accessKey }: { accessKey: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    try {
      setStatus((await send(accessKey, event.currentTarget)) ? "sent" : "failed");
    } catch (error) {
      // A network failure is the visitor's to retry; the form says so.
      if (!(error instanceof TypeError || error instanceof SyntaxError)) throw error;
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="mt-8 flex max-w-[640px] items-center gap-3 border border-lime-dim p-5 text-[15px] text-text"
      >
        <span className="size-2 bg-lime" />
        {CONTACT.sent}
      </div>
    );
  }

  return (
    <form
      data-reveal
      onSubmit={onSubmit}
      className="mt-8 grid max-w-[640px] grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-3"
    >
      <input required name="name" aria-label="Name" placeholder="Name" className={`${field} h-12`} />
      <input
        required
        type="email"
        name="email"
        aria-label="Your email"
        placeholder="Your email"
        className={`${field} h-12`}
      />
      <textarea
        required
        name="message"
        rows={5}
        aria-label="Message"
        placeholder="What are you building?"
        className={`${field} col-span-full resize-y py-3 leading-normal`}
      />
      {/* Web3Forms drops any submission that ticks this; people never see it. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" />
      <div className="col-span-full flex flex-wrap items-center justify-between gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="h-12 cursor-pointer rounded-none border border-lime bg-transparent px-[22px] text-[15px] font-semibold text-lime transition-colors duration-150 hover:bg-lime hover:text-bg disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message →"}
        </button>
        {status === "failed" && (
          <p role="alert" className="m-0 text-sm text-orange">
            {CONTACT.failed}
          </p>
        )}
      </div>
    </form>
  );
}
