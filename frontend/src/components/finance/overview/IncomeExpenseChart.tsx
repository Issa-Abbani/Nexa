import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", income: 2400, expenses: 1400 },
  { month: "Feb", income: 2800, expenses: 1600 },
  { month: "Mar", income: 2600, expenses: 1500 },
  { month: "Apr", income: 3200, expenses: 1800 },
  { month: "May", income: 2900, expenses: 1700 },
  { month: "Jun", income: 3500, expenses: 1900 },
  { month: "Jul", income: 3100, expenses: 1750 },
  { month: "Aug", income: 2850, expenses: 1420 },
];

export default function IncomeExpenseChart() {
  return (
    <div className="w-full rounded-2xl border border-border bg-surface p-5 shadow-sm cursor-pointer transition duration-300 ease-in hover:scale-[1.02] hover:bg-surface-muted">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold text-text-primary">
          Income vs. Expenses
        </h2>
        <p className="text-sm text-text-secondary">
          Your financial activity over the past months
        </p>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="income"
              name="Income"
              fill="var(--color-income)"
              radius={[4, 4, 0, 0]}
            />

            <Bar
              dataKey="expenses"
              name="Expenses"
              fill="var(--color-expense)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}