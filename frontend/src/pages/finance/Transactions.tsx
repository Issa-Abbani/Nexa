import TransactionTable from "../../components/finance/transactions/TransactionTable";
import TransactionModal from "../../components/finance/transactions/TransactionModal";
import { useState } from "react";
import type { TransactionModalTypes } from "../../types/Transaction";

export default function Transactions() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [transactionType, setTransactionType] = useState<TransactionModalTypes>("add");
  
  return (
    <div className="flex flex-col justify-center  mb-15">
      <div className="flex justify-between items-baseline mb-5">
        <h2 className="text-text-primary lg:text-5xl text-3xl">Transactions</h2>
        <button 
        className="md:text-lg text-md text-text-primary bg-primary rounded-xl md:px-3 px-2 md:py-1 py-1 cursor-pointer"
        onClick={() => {
          setTransactionType("add");
          setModalOpen(true)
        }}
        >
          Add Transaction
        </button>
      </div>

      {modalOpen && <TransactionModal isOpen={modalOpen} onClose={()=> setModalOpen(false)} transactionAction={transactionType} />}

      <div>
        <TransactionTable onOpenEdit={()=>setModalOpen(true)} onOpenDelete={()=>setModalOpen(true)} 
        setTransactionType={(type)=>{
          setTransactionType(type)
          setModalOpen(true);
          }} />
      </div>
    </div>
  );
}
