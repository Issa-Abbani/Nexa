import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Food", value: 420 },
  { name: "Bills", value: 310 },
  { name: "Transportation", value: 180 },
  { name: "Entertainment", value: 140 },
  { name: "Shopping", value: 120 },
  { name: "Other", value: 90 },
];

const COLORS = [
  "var(--color-income)",
  "var(--color-expense)",
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
];

export default function SpendingCategoryChart() {
  return (
    <div className="w-full rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-text-primary">
          Spending by Category
        </h2>
        <p className="text-sm text-text-secondary">
          Where your money is going this month
        </p>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="70%"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}