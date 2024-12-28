import ContactForm from 'components/contactForm/ContactForm';
import Modal from 'react-modal';
import './index.scss';

type ModalBasicProps = {
  modalIsOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
};

const ModalBasic = ({
  modalIsOpen = false,
  setModalIsOpen,
}: ModalBasicProps) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      overlayClassName='modal-overlay'
      className='modal-content'
    >
      <ContactForm />
    </Modal>
  );
};

export default ModalBasic;
