type WorkStatusProps = {
  variant: "available" | "unavailable" | "working";
};

export default function WorkStatus({ variant }: WorkStatusProps) {
  let label = "";
  let color = "";
  let textColor = "";

  if (variant === "available") {
    label = "Available to Work";
    color = "bg-success drop-shadow-[0_0_6px_var(--color-success)]";
    textColor = "text-success";
  }

  if (variant === "unavailable") {
    label = "Not Available Yet";
    color = "bg-foreground-surface";
    textColor = "text-foreground-surface";
  }

  if (variant === "working") {
    label = "Currently Working";
    color = "bg-warning drop-shadow-[0_0_6px_var(--color-warning)]";
    textColor = "text-warning";
  }

  return (
    <div className="flex items-center gap-3">
      <div className={`w-4 h-4 rounded-full ${color}`}></div>
      <p className={textColor}>{label}</p>
    </div>
  );
}
