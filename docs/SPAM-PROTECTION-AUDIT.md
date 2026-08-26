# Contact Form Spam Protection and Feedback Audit

The public contact form now uses a layered, credential-free protection approach.

| Layer | Production behavior |
| --- | --- |
| Formspree form-ID endpoint | The public client sends to the unique Formspree form endpoint rather than exposing an email-address endpoint. |
| Formspree filtering | Formspree documents automatic spam scanning and reCAPTCHA coverage for its forms. |
| `_gotcha` honeypot | A visually hidden, keyboard-inaccessible `_gotcha` input is included with every request. Formspree silently ignores submissions where this field is populated. |
| Session send guard | A visitor must spend at least 1.5 seconds on the form and then may submit at most once every 20 seconds per browser session. |
| Feedback | A delivery success panel enters with a subtle CSS animation and an accessible status role; the existing toast appears at the same time. Reduced-motion visitors receive the same feedback without animation. |

With owner approval, a labelled non-personal message was submitted from the production site after the protection update. Formspree accepted it, the input fields reset, the animated delivery panel appeared, and the toast reported **“Signal delivered.”**

The implementation intentionally avoids a separately configured Google reCAPTCHA v3 key, which would require an additional Google site/secret-key setup. This retains a low-friction, no-credential public form while using the protection available from Formspree plus the documented honeypot control. See [Formspree’s honeypot guidance](https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering) and [spam-prevention guidance](https://help.formspree.io/articles/troubleshooting/how-to-prevent-spam).
