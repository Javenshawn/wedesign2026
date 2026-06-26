import type { LucideIcon } from "lucide-react";

type MetricCardProps = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export function MetricCard({ icon: Icon, value, label }: MetricCardProps) {
  return (
    <div className="metric-card">
      <Icon size={28} />
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
