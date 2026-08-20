import TransactionTable from "../../components/finance/transactions/TransactionTable";
import AddTransactionModal from "../../components/finance/transactions/AddTransactionModal";
import { useState } from "react";

export default function Transactions() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-center  mb-15">
      <div className="flex justify-between items-baseline mb-5">
        <h2 className="text-text-primary lg:text-5xl text-3xl">Transactions</h2>
        <button 
        className="md:text-lg text-md text-text-primary bg-primary rounded-xl md:px-3 px-2 md:py-1 py-1 cursor-pointer"
        onClick={() => setModalOpen(true)}
        >
          Add Transaction
        </button>
      </div>

      {modalOpen && <AddTransactionModal isOpen={modalOpen} onClose={()=> setModalOpen(false)} />}

      <div>
        <TransactionTable />
      </div>
    </div>
  );
}
