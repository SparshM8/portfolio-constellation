/** Orbiting Archive design reminder: the contact form is a clear, respectful recruiter or founder signal—not a generic conversion widget. */
import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;
const initialForm = { name: "", email: "", inquiry: "Recruiter conversation", message: "" };
export function ContactForm() {
  const [form, setForm] = useState(initialForm); const [errors, setErrors] = useState<FieldErrors>({}); const [sent, setSent] = useState(false);
  const update = (key: keyof typeof form, value: string) => { setForm((current) => ({ ...current, [key]: value })); if (key in errors) setErrors((current) => ({ ...current, [key]: undefined })); };
  const submit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); const next: FieldErrors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (form.message.trim().length < 12) next.message = "Share at least a short note about the opportunity.";
    setErrors(next); if (Object.keys(next).length) return;
    setSent(true); setForm(initialForm); toast.success("Signal received locally", { description: "This demo form validates your message but does not send live email yet." });
  };
  return <form className="contact-form" onSubmit={submit} noValidate>{sent && <p className="contact-form__success" role="status">Signal logged. Connect this form to your email service before publishing.</p>}<div className="contact-form__row"><label>YOUR NAME<input value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Your name" aria-invalid={Boolean(errors.name)} />{errors.name && <span>{errors.name}</span>}</label><label>EMAIL ADDRESS<input type="email" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="you@company.com" aria-invalid={Boolean(errors.email)} />{errors.email && <span>{errors.email}</span>}</label></div><label>INQUIRY TYPE<select value={form.inquiry} onChange={(event) => update("inquiry", event.target.value)}><option>Recruiter conversation</option><option>Founder collaboration</option><option>Internship opportunity</option><option>Freelance project</option><option>General hello</option></select></label><label>YOUR MESSAGE<textarea value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="Tell Sparsh about the role, team, or idea." aria-invalid={Boolean(errors.message)} rows={4} />{errors.message && <span>{errors.message}</span>}</label><button type="submit" className="contact-form__submit" data-cursor-label="SEND">SEND A SIGNAL <Send size={16} /></button></form>;
}
