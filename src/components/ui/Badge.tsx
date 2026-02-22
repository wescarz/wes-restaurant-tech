interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success";
  className?: string;
}

const variantStyles = {
  default: "bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border)]",
  accent: "bg-[var(--accent)]/20 text-[var(--accent-light)] border-[var(--accent)]/40",
  success: "bg-[var(--success)]/20 text-[var(--success)] border-[var(--success)]/40",
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
