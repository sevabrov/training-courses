import { useState } from 'react';

import { PRIVATE_KEY, generateLiqPaySignature, base64Data } from './utils';

const LiqPayWidget = () => {
  const [data, setData] = useState({ data: '', signature: '' });
  // const [payload, setPayload] = useState<PayloadType | null>(null);

  console.log('DATA', data);

  const getPayment = async () => {
    const signature = await generateLiqPaySignature(PRIVATE_KEY, base64Data);
    setData({ data: base64Data, signature });
  };

  return (
    <div>
      <button onClick={getPayment}>Get Data</button>
      {data.data && data.signature && (
        <form
          method='POST'
          acceptCharset='utf-8'
          target='_blank'
          action='https://www.liqpay.ua/api/3/checkout'
        >
          <input type='hidden' name='data' value={data.data} />
          <input type='hidden' name='signature' value={data.signature} />
          <button>Pay</button>
        </form>
      )}
    </div>
  );
};

export default LiqPayWidget;