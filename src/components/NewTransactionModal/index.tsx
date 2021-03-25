import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { Container } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestCLose: () => void;
}

function NewTransactionModal({
  isOpen,
  onRequestCLose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestCLose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestCLose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar" />
      </button>
      <Container>
        <h2>Cadastrar transaçao</h2>
        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

export default NewTransactionModal;
