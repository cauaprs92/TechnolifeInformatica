import type { ReactNode } from "react";
import { SignalMark } from "./icons";

export default function SectionHeading({
  eyebrow,
  title,
  tone = "light",
  as: Tag = "h2",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={className}>
      <span className={`eyebrow ${tone === "dark" ? "text-signal-light" : "text-signal"}`}>
        <SignalMark className="size-3.5" />
        {eyebrow}
      </span>
      <Tag
        className={`mt-4 text-4xl leading-[1.02] font-bold sm:text-5xl lg:text-[3.5rem] ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </Tag>
    </div>
  );
}
