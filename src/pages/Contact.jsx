import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  ArrowUpRight,
  Send,
  Copy,
  Check,
} from "lucide-react";

const EMAIL = "tsheringugyen483@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* no-op */
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Hello${form.name ? ` from ${form.name}` : ""}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${
        form.email ? `\n${form.email}` : ""
      }`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative px-6 py-24 sm:py-28 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px w-10 bg-neutral-300 dark:bg-neutral-700" />
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 font-medium">
            Contact
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: intro + details */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] text-balance">
                Let&apos;s work
                <span className="block text-neutral-400 dark:text-neutral-600 font-light">
                  on something together.
                </span>
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 text-pretty max-w-md">
                Open to penetration testing and offensive security roles,
                including opportunities in Singapore. Send me a message and
                I&apos;ll get back to you soon.
              </p>
            </div>

            {/* Direct details */}
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 divide-y divide-neutral-200 dark:divide-neutral-800 overflow-hidden">
              <div className="flex items-center justify-between gap-4 p-5">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shrink-0">
                    <Mail size={16} strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 font-medium">
                      Email
                    </p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate hover:underline underline-offset-4"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 transition-colors hover:border-neutral-900 dark:hover:border-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check size={12} strokeWidth={2} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={12} strokeWidth={1.75} />
                      Copy
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3 p-5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shrink-0">
                  <Phone size={16} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 font-medium">
                    Phone
                  </p>
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    +975 17964942
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shrink-0">
                  <MapPin size={16} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 font-medium">
                    Location
                  </p>
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    Thimphu, Bhutan
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 font-medium mb-3">
                Find me on
              </p>
              <div className="flex items-center gap-2">
                {[
                  {
                    href: "https://github.com/ugyentring",
                    label: "GitHub",
                    Icon: Github,
                  },
                  {
                    href: "https://www.linkedin.com/in/ugyen-tshering-939521328/",
                    label: "LinkedIn",
                    Icon: Linkedin,
                  },
                  {
                    href: "https://www.facebook.com/utugg23",
                    label: "Facebook",
                    Icon: Facebook,
                  },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors hover:border-neutral-900 dark:hover:border-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100"
                  >
                    <Icon size={16} strokeWidth={1.75} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 sm:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 font-medium">
                  Drop me a message
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-300 dark:text-neutral-700">
                  01 / 01
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  id="name"
                  label="Name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  placeholder="Your name"
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                  placeholder="you@example.com"
                />
              </div>

              <div className="mt-5">
                <Field
                  id="message"
                  label="Message"
                  textarea
                  required
                  value={form.message}
                  onChange={(v) => setForm((f) => ({ ...f, message: v }))}
                  placeholder="Tell me a bit about your project or what you have in mind…"
                />
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  This will open your email app with the message ready to
                  send.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-5 py-2.5 text-sm font-medium text-neutral-900 dark:text-neutral-100 transition-all hover:border-neutral-900 dark:hover:border-neutral-100 hover:gap-3"
                  >
                    Email me directly
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.75}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-5 py-2.5 text-sm font-medium transition-all hover:bg-neutral-800 dark:hover:bg-white hover:gap-3"
                  >
                    <Send size={14} strokeWidth={1.75} />
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  id,
  label,
  type = "text",
  required,
  value,
  onChange,
  placeholder,
  textarea = false,
}) => {
  const baseClass =
    "w-full bg-transparent text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 border-0 border-b border-neutral-200 dark:border-neutral-800 px-0 pt-1 pb-2 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 transition-colors";
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[10px] uppercase tracking-[0.25em] font-medium text-neutral-500 dark:text-neutral-400 mb-2"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
    </div>
  );
};

export default Contact;
