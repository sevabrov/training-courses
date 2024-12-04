import { useState } from 'react';
import Modal from 'react-modal';
import './index.scss';

import { PRIVATE_KEY, generateLiqPaySignature, base64Data } from '../utils';

// Set the root element for accessibility
Modal.setAppElement('#root');

const LiqPayWidget = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [data, setData] = useState({ data: '', signature: '' });
  // const [payload, setPayload] = useState<PayloadType | null>(null);

  console.log('DATA', data);
  console.log('modalIsOpen', modalIsOpen);

  const getPayment = async () => {
    const signature = await generateLiqPaySignature(PRIVATE_KEY, base64Data);
    setData({ data: base64Data, signature });
    setModalIsOpen(true);
  };

  return (
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
        <p>
          Покрокова інструкція по правильному догляду за домашніми рослинами
        </p>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form
            method='POST'
            acceptCharset='utf-8'
            target='_blank'
            action='https://www.liqpay.ua/api/3/checkout'
          >
            <input type='hidden' name='data' value={data.data} />
            <input type='hidden' name='signature' value={data.signature} />
            <button className='LiqPayButton'>Купити зараз</button>
          </form>
        </div>
        {/* <button onClick={() => setModalIsOpen(false)}>Close</button> */}
        <br />
        <p>
          Після оплати скидайте скріншот про оплату в месенджер на номер
          +380634406952, та у відповідь отримаєте Гайд
        </p>
        <br />
        <p>
          P.s. Ви нічим не ризикуєте. Якщо курс вам не сподобається, я поверну
          вам кошти без зайвих питань.
        </p>
      </Modal>
    </div>
  );
};

export default LiqPayWidget;
