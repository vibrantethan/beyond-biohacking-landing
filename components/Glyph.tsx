const common = {
  width: 30, height: 30,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function Glyph({ kind }: { kind: string }) {
  switch (kind) {
    case "heart":
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
          <path d="M8 12h2l1.2-2 1.6 4 1.2-2H17" />
        </svg>
      );
    case "gut":
      return (
        <svg {...common}>
          <path d="M7 3c2 0 3 1.5 3 3.5S8 10 8 11.5 9 14 11 14s3-1 3-2.5S13 9 13 8" />
          <path d="M14 4c1.5 0 2.5 1 2.5 2.5s-1 2-2 2.5" />
          <path d="M9 16c0 2 2 4 5 4s5-2 5-4-2-3-4-3" />
          <circle cx="10" cy="20" r="0.6" fill="currentColor" />
        </svg>
      );
    case "hormone":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="16" r="3" />
          <path d="M10.1 9.9l3.8 4.2" />
          <path d="M8 3v2" /><path d="M3 8h2" />
          <path d="M19 16h2" /><path d="M16 19v2" />
        </svg>
      );
    case "neural":
      return (
        <svg {...common}>
          <path d="M6 9c0-2 1.5-4 4-4 1.2 0 2 .5 2 1.5C12 5.5 13 5 14 5c2.5 0 4 2 4 4 1.2.4 2 1.5 2 2.7 0 1.3-.9 2.3-2 2.7 0 2-1.5 4-4 4-1 0-2-.5-2-1.5 0 1-.8 1.5-2 1.5-2.5 0-4-2-4-4-1.2-.4-2-1.4-2-2.7 0-1.2.8-2.3 2-2.7z" />
          <path d="M9 10.5l1.5 1.5M14 11.5l1.5-1M10 14.5l2-1" />
        </svg>
      );
    case "cell":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="11" cy="11" r="3" />
          <circle cx="11" cy="11" r="0.8" fill="currentColor" />
          <circle cx="16" cy="16" r="1" fill="currentColor" />
          <circle cx="7" cy="15" r="0.8" fill="currentColor" />
          <circle cx="16" cy="8" r="0.8" fill="currentColor" />
        </svg>
      );
    case "toxin":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="2.5" />
          <circle cx="6" cy="7" r="2.2" />
          <circle cx="18" cy="7" r="2.2" />
          <circle cx="12" cy="19" r="2.2" />
          <path d="M9.5 10l-2-1.5M14.5 10l2-1.5M12 14.5v2" />
        </svg>
      );
    default:
      return <svg {...common}><circle cx="12" cy="12" r="6" /></svg>;
  }
}
