/** Orbiting Archive design reminder: the contact form is a clear, respectful recruiter or founder signal—not a generic conversion widget. */
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { toast } from "sonner";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;
type SavedContact = Pick<typeof initialForm, "name" | "email">;
const initialForm = { name: "", email: "", inquiry: "Recruiter conversation", message: "" };
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvkpedzg";
const LAST_SEND_KEY = "portfolio-constellation-contact-last-sent";
const SAVED_CONTACT_KEY = "portfolio-constellation-saved-contact";
const SEND_COOLDOWN_MS = 20_000;

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [honeypot, setHoneypot] = useState("");
  const [rememberDetails, setRememberDetails] = useState(false);
  const [hasSavedDetails, setHasSavedDetails] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sendError, setSendError] = useState("");
  const openedAt = useRef(Date.now());

  useEffect(() => {
    try {
      const saved = localStorage.getItem(SAVED_CONTACT_KEY);
      if (!saved) return;
      const parsed = JSON.parse(saved) as Partial<SavedContact>;
      if (typeof parsed.name !== "string" || typeof parsed.email !== "string") return;
      const savedName = parsed.name;
      const savedEmail = parsed.email;
      setForm((current) => ({ ...current, name: savedName, email: savedEmail }));
      setRememberDetails(true);
      setHasSavedDetails(true);
    } catch {
      localStorage.removeItem(SAVED_CONTACT_KEY);
    }
  }, []);

  const update = (key: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    if (key in errors) setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const clearSavedDetails = () => {
    localStorage.removeItem(SAVED_CONTACT_KEY);
    setHasSavedDetails(false);
    setRememberDetails(false);
    setForm((current) => ({ ...current, name: "", email: "" }));
  };

  const updateRememberDetails = (checked: boolean) => {
    setRememberDetails(checked);
    if (!checked && hasSavedDetails) clearSavedDetails();
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: FieldErrors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (form.message.trim().length < 12) next.message = "Share at least a short note about the opportunity.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const lastSent = Number(sessionStorage.getItem(LAST_SEND_KEY) ?? 0);
    if (honeypot || Date.now() - openedAt.current < 1_500 || Date.now() - lastSent < SEND_COOLDOWN_MS) {
      setSendError("Please wait a moment before sending another signal.");
      return;
    }

    setSubmitting(true);
    setSendError("");
    setSent(false);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _gotcha: honeypot, _subject: `Portfolio contact: ${form.inquiry}` }),
      });
      if (!response.ok) throw new Error("Formspree rejected the request");
      if (rememberDetails) {
        localStorage.setItem(SAVED_CONTACT_KEY, JSON.stringify({ name: form.name.trim(), email: form.email.trim() }));
        setHasSavedDetails(true);
      }
      sessionStorage.setItem(LAST_SEND_KEY, String(Date.now()));
      setSent(true);
      setForm((current) => ({ ...initialForm, name: rememberDetails ? current.name : "", email: rememberDetails ? current.email : "" }));
      toast.success("Signal delivered", { description: "Your message has been sent to Sparsh." });
    } catch {
      setSendError("The signal could not be delivered. Please try again or use the email link above.");
      toast.error("Signal not delivered", { description: "Please try again in a moment." });
    } finally {
      setSubmitting(false);
    }
  };

  return <form className="contact-form" onSubmit={submit} noValidate>
    {sent && <p className="contact-form__success contact-form__success--animated" role="status"><CheckCircle2 size={18} aria-hidden="true" />Signal delivered. Sparsh will receive your message at the linked contact address.</p>}
    {sendError && <p className="contact-form__error" role="alert">{sendError}</p>}
    <div className="contact-form__honeypot" aria-hidden="true"><label>Leave this field empty<input name="_gotcha" value={honeypot} onChange={(event) => setHoneypot(event.target.value)} tabIndex={-1} autoComplete="off" /></label></div>
    <div className="contact-form__row"><label>YOUR NAME<input name="name" value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Your name" aria-invalid={Boolean(errors.name)} />{errors.name && <span>{errors.name}</span>}</label><label>EMAIL ADDRESS<input name="email" type="email" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="you@company.com" aria-invalid={Boolean(errors.email)} />{errors.email && <span>{errors.email}</span>}</label></div>
    <div className="contact-form__preferences"><label className="contact-form__remember"><input type="checkbox" checked={rememberDetails} onChange={(event) => updateRememberDetails(event.target.checked)} /> Remember my name and email on this device</label>{hasSavedDetails && <button type="button" className="contact-form__clear" onClick={clearSavedDetails}>CLEAR SAVED DETAILS</button>}</div>
    <p className="contact-form__privacy">Saved details stay only in this browser and are never sent until you submit a form.</p>
    <label>INQUIRY TYPE<select name="inquiry" value={form.inquiry} onChange={(event) => update("inquiry", event.target.value)}><option>Recruiter conversation</option><option>Founder collaboration</option><option>Internship opportunity</option><option>Freelance project</option><option>General hello</option></select></label>
    <label>YOUR MESSAGE<textarea name="message" value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="Tell Sparsh about the role, team, or idea." aria-invalid={Boolean(errors.message)} rows={4} />{errors.message && <span>{errors.message}</span>}</label>
    <button type="submit" className="contact-form__submit" disabled={submitting} aria-busy={submitting} data-cursor-label="SEND">{submitting ? <><LoaderCircle className="contact-form__spinner" size={16} aria-hidden="true" /> SENDING SIGNAL</> : <>SEND A SIGNAL <Send size={16} /></>}</button>
  </form>;
}
