"use client";

import { useSyncExternalStore } from "react";
import { openingHours } from "@/lib/nav";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAY_NAMES = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Sao_Paulo",
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

/** Retorna "open|texto" ou "closed|texto" no fuso de São Paulo. */
function computeStatus(date: Date) {
  const parts = formatter.formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = WEEKDAYS.indexOf(get("weekday"));
  const minutes = Number(get("hour")) * 60 + Number(get("minute"));

  const today = openingHours[day];
  if (today && minutes >= toMinutes(today[0]) && minutes < toMinutes(today[1])) {
    return `open|Aberto agora · até ${today[1]}`;
  }
  if (today && minutes < toMinutes(today[0])) {
    return `closed|Fechado · abre hoje às ${today[0]}`;
  }
  for (let i = 1; i <= 7; i++) {
    const next = (day + i) % 7;
    const hours = openingHours[next];
    if (hours) {
      const when = i === 1 ? "amanhã" : DAY_NAMES[next];
      return `closed|Fechado · abre ${when} às ${hours[0]}`;
    }
  }
  return "closed|Fechado";
}

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 30_000);
  return () => window.clearInterval(id);
}

const getSnapshot = () => computeStatus(new Date());
const getServerSnapshot = () => null;

export default function OpenStatus({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const status = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [state, label] = status
    ? (status.split("|") as ["open" | "closed", string])
    : (["unknown", "Seg a sex 08:30–18:00 · Sáb 09:00–13:00"] as const);

  const dot =
    state === "open" ? "bg-emerald-400" : state === "closed" ? "bg-signal-light" : "bg-current opacity-40";

  const toneClass =
    tone === "dark"
      ? "bg-white/[0.07] text-white/85 ring-white/15"
      : "bg-white text-ink ring-line";

  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-sm font-medium ring-1 ${toneClass} ${className}`}
      aria-live="polite"
    >
      <span className="relative flex size-2">
        {state === "open" && (
          <span className={`status-ping absolute inline-flex size-full rounded-full ${dot}`} />
        )}
        <span className={`relative inline-flex size-2 rounded-full ${dot}`} />
      </span>
      {label}
    </span>
  );
}
