interface ProgressBarProps {
  value: number;
  max: number;
}

export default function ProgressBar({ value, max }: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="w-40 md:w-100 h-2.5 bg-surface-muted rounded-full overflow-hidden">
      <div
        style={{ width: `${percentage}%` }}
        className="h-full bg-primary rounded-2xl"
      />
    </div>
  );
}

