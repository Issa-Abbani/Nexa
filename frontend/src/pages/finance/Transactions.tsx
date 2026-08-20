import TransactionTable from "../../components/finance/transactions/TransactionTable";

export default function Transactions() {
  return (
    <div className="flex flex-col justify-center  mb-15">
      <div className="flex justify-between items-baseline mb-5">
        <h2 className="text-text-primary lg:text-5xl text-3xl">Transactions</h2>
        <button className="text-lg text-text-primary bg-primary rounded-xl px-4 py-2 cursor-pointer">Add Transaction</button>
      </div>

      <div>
        <TransactionTable />
      </div>
    </div>
  );
}
