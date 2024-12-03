import { useState } from 'react';
import './index.scss';

import { PRIVATE_KEY, generateLiqPaySignature, base64Data } from '../utils';

const LiqPayWidget = () => {
  const [data, setData] = useState({ data: '', signature: '' });
  // const [payload, setPayload] = useState<PayloadType | null>(null);

  console.log('DATA', data);

  const getPayment = async () => {
    const signature = await generateLiqPaySignature(PRIVATE_KEY, base64Data);
    setData({ data: base64Data, signature });
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
        ОТРИМАТИ КУРС
      </button>
      {data.data && data.signature && (
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
      )}
    </div>
  );
};

export default LiqPayWidget;
