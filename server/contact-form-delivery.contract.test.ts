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
    expect(source).not.toContain("Signal received locally");
    expect(source).not.toContain("does not send live email yet");
  });
});
