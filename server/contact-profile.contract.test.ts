import { describe, expect, it } from "vitest";
import { sparshProfile } from "../client/src/data/profile";

describe("public contact profile", () => {
  it("uses Sparsh Mishra's supplied email and social profiles", () => {
    expect(sparshProfile.email).toBe("its8samay@gmail.com");
    expect(sparshProfile.socials).toEqual([
      {
        label: "LINKEDIN",
        href: "https://www.linkedin.com/in/sparshm8/",
        note: "Sparsh Mishra on LinkedIn",
      },
      {
        label: "GITHUB",
        href: "https://github.com/SparshM8",
        note: "SparshM8 on GitHub",
      },
    ]);
  });

  it("does not keep a fabricated phone number or unsupported social profile", () => {
    expect("phone" in sparshProfile).toBe(false);
    expect(sparshProfile.socials.map((social) => social.label)).not.toContain("INSTAGRAM");
  });
});
