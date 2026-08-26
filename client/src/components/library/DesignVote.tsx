/** Orbiting Archive voting: an anonymous browser key supports one changeable design preference, stored as a shared field signal without collecting identity. */
import { Heart, LoaderCircle, Orbit } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { PortfolioWorld } from "@/data/portfolios";
import { trpc } from "@/lib/trpc";

function useVisitorKey() {
  return useState(() => { const saved = localStorage.getItem("portfolio-constellation-visitor-key"); if (saved) return saved; const key = `pc-${crypto.randomUUID()}`; localStorage.setItem("portfolio-constellation-visitor-key", key); return key; })[0];
}

export function DesignVoteButton({ world }: { world: PortfolioWorld }) {
  const visitorKey = useVisitorKey(); const utils = trpc.useUtils();
  const summary = trpc.votes.summary.useQuery({ visitorKey }, { staleTime: 20_000 });
  const mutation = trpc.votes.set.useMutation({ onSuccess: (data) => { utils.votes.summary.setData({ visitorKey }, data); utils.votes.summary.invalidate(); toast.success(`Vote sent to ${world.title}`, { description: "You can change your favorite design at any time." }); }, onError: () => toast.error("Vote signal unavailable", { description: "Please try again in a moment." }) });
  const isSelected = summary.data?.selectedDesign === world.slug; const total = summary.data?.totals[world.slug] ?? 0;
  return <button type="button" className={`design-vote ${isSelected ? "is-selected" : ""}`} onClick={() => mutation.mutate({ visitorKey, designSlug: world.slug })} aria-pressed={isSelected} disabled={mutation.isPending} data-cursor-label={isSelected ? "VOTED" : "VOTE"} data-cursor-color={world.accent}><span>{mutation.isPending ? <LoaderCircle className="animate-spin" size={14}/> : <Heart size={14} fill={isSelected ? "currentColor" : "none"}/>} {isSelected ? "YOUR FAVORITE" : "VOTE FOR THIS"}</span><b>{total} {total === 1 ? "SIGNAL" : "SIGNALS"}</b></button>;
}

export function VoteLead() {
  const summary = trpc.votes.summary.useQuery({}, { staleTime: 20_000 });
  const entries = Object.entries(summary.data?.totals ?? {}); const leader = entries.sort((a, b) => b[1] - a[1])[0];
  return <p className="vote-lead" aria-live="polite"><Orbit size={13}/>{summary.isLoading ? "READING VISITOR SIGNALS" : leader ? `MOST LOVED / ${leader[0].toUpperCase()} / ${leader[1]} VOTES` : "VISITOR VOTES ARE OPEN"}</p>;
}
