export interface ISummaryCard{
  title: string,
  value: number,
  change: number,
  type: "positive" | "negative" | "neutral"
}

export interface IBalanceCard{
  balance: number,
  change: number,
  changeAmount: number
}
