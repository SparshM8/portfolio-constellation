import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("contact form delivery contract", () => {
  it("uses the verified Formspree endpoint and no longer presents the form as local-only", () => {
    const source = readFileSync(resolve(process.cwd(), "client/src/components/shared/ContactForm.tsx"), "utf8");
    expect(source).toContain("https://formspree.io/f/mvkpedzg");
    expect(source).toContain('method: "POST"');
    expect(source).toContain('name="email"');
    expect(source).toContain('name="message"');
    expect(source).toContain('name="_gotcha"');
    expect(source).toContain("SEND_COOLDOWN_MS");
    expect(source).toContain("sessionStorage.setItem");
    expect(source).toContain("localStorage.setItem(SAVED_CONTACT_KEY");
    expect(source).toContain("CLEAR SAVED DETAILS");
    expect(source).toContain("LoaderCircle");
    expect(source).toContain("aria-busy={submitting}");
    expect(source).toContain("contact-form__success--animated");
    expect(source).not.toContain("Signal received locally");
    expect(source).not.toContain("does not send live email yet");
  });
});
