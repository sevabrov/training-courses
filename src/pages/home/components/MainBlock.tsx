import { Typography } from 'components';
import ModalBasic from 'components/modal/Modal';
import { useState } from 'react';
import Modal from 'react-modal';

// Set the root element for accessibility
Modal.setAppElement('#root');

export const MainBlock = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const getPayment = async () => {
    setModalIsOpen(true);
  };
  return (
    <div className='content-block'>
      <div className='content-main'>
        <div style={{ textAlign: 'center' }}>
          <Typography color='light'>
            Онлайн-курс від Броварної Євгенії
          </Typography>
          <Typography color='primary' variant='h1'>
            ЧЕКЛИСТ
          </Typography>
          <Typography color='primary' variant='h2'>
            Базовий догляд за рослинами для новачків
          </Typography>
          <Typography color='light'>
            Покрокова інструкція по <span>правильному</span> догляду за
            домашніми рослинами
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
              ОТРИМАТИ ГАЙД
            </button>
          </div>
          {/* <WayForPayWidget productName='Курси Zeleno House' productPrice={1} /> */}
          <Typography color='light'>
            <span>лише за 99 гринень</span>
            {/* 599 грн */}
          </Typography>
        </div>
      </div>
      <ModalBasic modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
};
