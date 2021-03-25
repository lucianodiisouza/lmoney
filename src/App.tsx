import { useState } from "react";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { Dashboard, Header, NewTransactionModal } from "./components";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestCLose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}
