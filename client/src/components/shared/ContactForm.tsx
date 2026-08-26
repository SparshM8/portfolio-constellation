/** Orbiting Archive design reminder: the contact form is a clear, respectful recruiter or founder signal—not a generic conversion widget. */
import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;
const initialForm = { name: "", email: "", inquiry: "Recruiter conversation", message: "" };
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvkpedzg";
export function ContactForm() {
  const [form, setForm] = useState(initialForm); const [errors, setErrors] = useState<FieldErrors>({}); const [sent, setSent] = useState(false); const [submitting, setSubmitting] = useState(false); const [sendError, setSendError] = useState("");
  const update = (key: keyof typeof form, value: string) => { setForm((current) => ({ ...current, [key]: value })); if (key in errors) setErrors((current) => ({ ...current, [key]: undefined })); };
  const submit = async (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); const next: FieldErrors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (form.message.trim().length < 12) next.message = "Share at least a short note about the opportunity.";
    setErrors(next); if (Object.keys(next).length) return;
    setSubmitting(true); setSendError(""); setSent(false);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ ...form, _subject: `Portfolio contact: ${form.inquiry}` }) });
      if (!response.ok) throw new Error("Formspree rejected the request");
      setSent(true); setForm(initialForm); toast.success("Signal delivered", { description: "Your message has been sent to Sparsh." });
    } catch {
      setSendError("The signal could not be delivered. Please try again or use the email link above.");
      toast.error("Signal not delivered", { description: "Please try again in a moment." });
    } finally { setSubmitting(false); }
  };
  return <form className="contact-form" onSubmit={submit} noValidate>{sent && <p className="contact-form__success" role="status">Signal delivered. Sparsh will receive your message at the linked contact address.</p>}{sendError && <p className="contact-form__error" role="alert">{sendError}</p>}<div className="contact-form__row"><label>YOUR NAME<input name="name" value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Your name" aria-invalid={Boolean(errors.name)} />{errors.name && <span>{errors.name}</span>}</label><label>EMAIL ADDRESS<input name="email" type="email" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="you@company.com" aria-invalid={Boolean(errors.email)} />{errors.email && <span>{errors.email}</span>}</label></div><label>INQUIRY TYPE<select name="inquiry" value={form.inquiry} onChange={(event) => update("inquiry", event.target.value)}><option>Recruiter conversation</option><option>Founder collaboration</option><option>Internship opportunity</option><option>Freelance project</option><option>General hello</option></select></label><label>YOUR MESSAGE<textarea name="message" value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="Tell Sparsh about the role, team, or idea." aria-invalid={Boolean(errors.message)} rows={4} />{errors.message && <span>{errors.message}</span>}</label><button type="submit" className="contact-form__submit" disabled={submitting} data-cursor-label="SEND">{submitting ? "SENDING SIGNAL" : "SEND A SIGNAL"} <Send size={16} /></button></form>;
}
