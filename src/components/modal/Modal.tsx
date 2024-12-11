import FormBasic from 'components/form/Form';
import Modal from 'react-modal';

type ModalBasicProps = {
  modalIsOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
};

// Set the root element for accessibility
Modal.setAppElement('#root');

const ModalBasic = ({
  modalIsOpen = false,
  setModalIsOpen,
}: ModalBasicProps) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <h2>Базовий догляд за рослинами для новачкі</h2>
      <p>Покрокова інструкція по правильному догляду за домашніми рослинами</p>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}></div>
      <FormBasic />
      <br />
      <p>
        P.s. Ви нічим не ризикуєте. Якщо курс вам не сподобається, я поверну вам
        кошти без зайвих питань.
      </p>
    </Modal>
  );
};

export default ModalBasic;
