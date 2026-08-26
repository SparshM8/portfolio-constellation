import { chromium } from "playwright-core";

const browser = await chromium.launch({ executablePath: "/usr/bin/chromium", headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
await page.emulateMedia({ reducedMotion: "reduce" });
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.waitForTimeout(250);

const skip = page.getByRole("link", { name: "SKIP TO MAIN CONTENT" });
await skip.focus();
if (await page.evaluate(() => document.activeElement?.textContent) !== "SKIP TO MAIN CONTENT") throw new Error("Skip link is not keyboard focusable");
await page.keyboard.press("Enter");
if (await page.evaluate(() => document.activeElement?.id) !== "main-content") throw new Error("Skip link did not move focus to main content");

if (await page.locator(".constellation-loader").count() !== 0) throw new Error("Loader was not suppressed for reduced motion");
if (await page.locator(".constellation-cursor").evaluate((node) => getComputedStyle(node).display) !== "none") throw new Error("Custom cursor was not suppressed for reduced motion");

const filter = page.getByRole("button", { name: /Product Design/i }).first();
await filter.focus();
await page.keyboard.press("Enter");
if (await filter.getAttribute("aria-pressed") !== "true") throw new Error("Filter did not activate with keyboard input");

const preview = page.getByRole("button", { name: /TEST LIVE PREVIEW/i }).first();
await preview.focus();
await page.keyboard.press("Enter");
const dialog = page.getByRole("dialog");
if (await dialog.count() !== 1) throw new Error("Preview modal did not open from keyboard input");
await page.keyboard.press("Escape");
if (await dialog.count() !== 0) throw new Error("Preview modal did not close with Escape");

const contactName = page.getByRole("textbox", { name: /YOUR NAME/i });
await contactName.focus();
await page.keyboard.type("Accessibility Check");
if (await contactName.inputValue() !== "Accessibility Check") throw new Error("Contact field is not usable with keyboard input");

const vote = page.getByRole("button", { name: /VOTE FOR THIS|YOUR FAVORITE/i }).first();
await vote.focus();
await page.keyboard.press("Enter");
await page.waitForTimeout(450);
if ((await vote.getAttribute("aria-pressed")) !== "true") throw new Error("Vote button did not persist selected state after keyboard input");
const visitorKey = await page.evaluate(() => localStorage.getItem("portfolio-constellation-visitor-key"));
console.log(`PASS keyboard, reduced-motion, modal, contact, and vote checks; visitorKey=${visitorKey}`);
await browser.close();
