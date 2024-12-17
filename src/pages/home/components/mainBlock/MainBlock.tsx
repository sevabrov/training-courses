import { Typography } from 'components';
import ModalBasic from 'components/modal/Modal';
import { useState } from 'react';
import Modal from 'react-modal';
import './index.scss';
import Timer from 'components/timer/Timer';

// Set the root element for accessibility
Modal.setAppElement('#root');

export const MainBlock = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const getPayment = async () => {
    setModalIsOpen(true);
  };
  return (
    <div className='content-block main-block'>
      <div className='content-main'>
        <div style={{ textAlign: 'center' }}>
          <Typography color='light'>
            Онлайн-курс від Броварної Євгенії
          </Typography>
          <Typography color='primary' variant='h1'>
            Кімнатні рослини як антистрес
          </Typography>
          <Typography color='primary' variant='h2'>
            Навчися доглядати за рослинами та створювати гармонію в житті всього
            за 5 днів!
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '20px',
            }}
          >
            <button className='LiqPayButton' onClick={getPayment}>
              Придбати курс
            </button>
          </div>

          <Typography color='dark'>
            <span>299 грн замість&nbsp;</span>
            <span style={{ textDecoration: 'line-through' }}>2499 грн</span>
          </Typography>
        </div>
        <Timer />
      </div>
      <ModalBasic modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
};
