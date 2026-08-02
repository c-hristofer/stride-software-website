export type IconName =
  | "arrow-down"
  | "arrow-right"
  | "arrow-up-right"
  | "check"
  | "chevron-down"
  | "chevron-right"
  | "chevron-up"
  | "coach"
  | "location"
  | "more"
  | "planner"
  | "plus"
  | "profile"
  | "route"
  | "session"
  | "spark"
  | "sun"
  | "track"
  | "umbrella";

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return <span className={`ui-icon icon-${name} ${className}`.trim()} aria-hidden="true" />;
}

export function StatusIcons() {
  return (
    <span className="status-icons" aria-hidden="true">
      <span className="status-dot" />
      <span className="status-ring" />
      <span className="status-battery" />
    </span>
  );
}
