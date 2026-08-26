/** Orbiting Archive starter lab: preview edits remain local, update the displayed template immediately, and are later written into a personalized source ZIP. */
import { Check, Code2, Copy, Download, Eye, LoaderCircle, PencilLine, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { designGuides, designSourceZips } from "@/data/designLibrary";
import { getComponentSnippet, snippetLabels, type SnippetKey } from "@/data/componentSnippets";
import type { PortfolioWorld } from "@/data/portfolios";
import { templateProfileInstructions, templateProfiles, type TemplateProfile } from "@/lib/templateProfiles";

const snippets: SnippetKey[] = ["hero", "gallery", "contact"];
const profileFields: Array<{ key: keyof TemplateProfile; label: string }> = [
  { key: "name", label: "YOUR NAME" }, { key: "role", label: "ROLE" }, { key: "headline", label: "HEADLINE" }, { key: "email", label: "EMAIL" }, { key: "location", label: "LOCATION" }, { key: "projectHeading", label: "PROJECT LABEL" }, { key: "contactCta", label: "CONTACT CTA" },
];

export function DesignPreviewModal({ world }: { world: PortfolioWorld }) {
  const [section, setSection] = useState<SnippetKey>("hero"); const [copied, setCopied] = useState(false); const [profile, setProfile] = useState<TemplateProfile>(templateProfiles[world.slug]);
  const guide = designGuides[world.slug]; const code = getComponentSnippet(world.slug, section);
  const update = (key: keyof TemplateProfile, value: string) => setProfile((current) => ({ ...current, [key]: value }));
  const copyCode = async () => { try { await navigator.clipboard.writeText(code); setCopied(true); window.setTimeout(() => setCopied(false), 1600); toast.success(`${snippetLabels[section]} copied`, { description: "Paste it into your React starter and replace the demo fields." }); } catch { toast.error("Copy was blocked", { description: "Select the code in the preview and copy it manually." }); } };
  return <Dialog><DialogTrigger asChild><button type="button" className="world-card__preview" data-cursor-label="PREVIEW" data-cursor-color={world.accent}><Eye size={14}/> TEST LIVE PREVIEW</button></DialogTrigger><DialogContent className="template-preview-modal" showCloseButton><DialogHeader><p className="signal-label">LIVE TEMPLATE PREVIEW / {world.number}</p><DialogTitle>{guide.label} <em>starter kit</em></DialogTitle><DialogDescription>Edit personal fields, watch the preview update, then build a ZIP that embeds those values in its JSON configuration.</DialogDescription></DialogHeader><div className="template-preview-modal__grid"><div className={`template-preview template-preview--${world.slug}`} style={{ "--preview-accent": world.accent } as React.CSSProperties}><div className="template-preview__top"><Sparkles size={13}/><span>{profile.role}</span><i>{world.number}</i></div><div className="template-preview__hero"><p>HELLO, I’M</p><h2>{profile.name}</h2><strong>{profile.headline}</strong></div><div className="template-preview__projects"><span>{profile.projectHeading.toUpperCase()}</span>{world.cases.slice(0, 2).map((item) => <div key={item.title}><b>{item.title}</b><small>{item.type} / {item.year}</small></div>)}</div><div className="template-preview__contact"><span>{profile.contactCta}</span><b>{profile.email}</b></div></div><div className="template-preview-modal__tools"><div className="preview-meta"><span>DESIGN FIT</span><p>{guide.bestFor}</p><span>EDIT ONE FILE</span><code>config/template-profiles.json</code></div><div className="preview-editor"><p><PencilLine size={14}/> EDIT PREVIEW DETAILS</p><div>{profileFields.map(({ key, label }) => <label key={key}>{label}<input value={profile[key]} onChange={(event) => update(key, event.target.value)} /></label>)}</div></div><details className="preview-config"><summary><Code2 size={15}/> VIEW JSON CONFIG</summary><p>{templateProfileInstructions}</p><pre>{JSON.stringify({ templates: { [world.slug]: profile } }, null, 2)}</pre></details><div className="preview-snippets"><p>COPY COMPONENT CODE</p><div>{snippets.map((item) => <button type="button" key={item} className={section === item ? "is-active" : ""} onClick={() => { setSection(item); setCopied(false); }}>{snippetLabels[item]}</button>)}</div><pre><code>{code}</code></pre><button type="button" className="preview-copy" onClick={copyCode} data-cursor-label="COPY">{copied ? <Check size={15}/> : <Copy size={15}/>} {copied ? "COPIED" : `COPY ${snippetLabels[section].toUpperCase()}`}</button></div><PersonalizedDownload profile={profile} world={world} /></div></div></DialogContent></Dialog>;
}

function PersonalizedDownload({ profile, world }: { profile: TemplateProfile; world: PortfolioWorld }) {
  const [building, setBuilding] = useState(false);
  const buildZip = async () => { setBuilding(true); try {
    const [{ default: JSZip }, response] = await Promise.all([import("jszip"), fetch(designSourceZips[world.slug])]);
    if (!response.ok) throw new Error("Unable to retrieve source package.");
    const zip = await JSZip.loadAsync(await response.arrayBuffer()); const configPath = Object.keys(zip.files).find((path) => path.endsWith("template-profiles.json"));
    if (!configPath) throw new Error("The starter package does not include template-profiles.json.");
    const configFile = zip.file(configPath); if (!configFile) throw new Error("Configuration file could not be read.");
    const config = JSON.parse(await configFile.async("text")); config.templates[world.slug] = profile;
    zip.file(configPath, `${JSON.stringify(config, null, 2)}\n`);
    const folder = configPath.slice(0, configPath.indexOf("source/client/src/config/template-profiles.json"));
    zip.file(`${folder}YOUR-STARTER-SETUP.md`, `# Your ${world.title} Starter\n\nYour preview details have been written to \`source/client/src/config/template-profiles.json\`.\n\n## Next steps\n\n1. Open the starter folder in VS Code.\n2. Keep editing the selected profile object in the JSON configuration file.\n3. Replace demo project data in \`source/client/src/data/portfolios.ts\`.\n4. Run \`pnpm install\`, then \`pnpm dev\`.\n`);
    const blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE" }); const url = URL.createObjectURL(blob); const anchor = document.createElement("a"); anchor.href = url; anchor.download = `${profile.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "my"}-${world.slug}-portfolio-starter.zip`; anchor.click(); URL.revokeObjectURL(url);
    toast.success("Personalized starter ready", { description: "Your edited preview details were written into template-profiles.json." });
  } catch (error) { toast.error("Could not build personalized ZIP", { description: error instanceof Error ? error.message : "Please try again." }); } finally { setBuilding(false); } };
  return <div className="preview-downloads"><button type="button" className="preview-download" onClick={buildZip} disabled={building} data-cursor-label="BUILD">{building ? <LoaderCircle className="animate-spin" size={16}/> : <Download size={16}/>} {building ? "BUILDING PERSONAL ZIP" : "BUILD PERSONALIZED ZIP"}</button><a href={designSourceZips[world.slug]} download>DOWNLOAD BLANK STARTER</a><p>Built locally in your browser. Your personal details are not sent to a server.</p></div>;
}
