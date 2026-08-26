# Responsive Layout and Contact-Flow Refinement Audit

The hero’s decorative **Portfolio Constellation / Creator Seal** label caused an unintended collision with the recruitment-copy block at standard desktop widths. The label is now intentionally suppressed from 701px through 1440px, where the compact creator stamp remains visible without visual interference. The full hero composition retains the label only on sufficiently wide displays.

The public contact form now provides an inline spinner and disabled, `aria-busy` button while delivery is in progress. Visitors may opt in to save only their name and email in their current browser after a successful submission. The form visibly explains that this data is browser-local and provides **Clear Saved Details** to remove it immediately.

With owner approval, a labelled production test used the remember-details option. Formspree accepted the submission, the success panel and toast appeared, the test name/email were retained, and **Clear Saved Details** removed them. No test details remain in the browser after verification.

Automatic email acknowledgements remain intentionally deferred. Formspree documents Auto Response as a Professional or Business feature, and the owner chose not to upgrade or add a separate provider.
