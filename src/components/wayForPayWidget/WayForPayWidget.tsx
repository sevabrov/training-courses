import { useEffect } from 'react';
import CryptoJS from 'crypto-js';

// const PRIVATE_KEY = '5f190ef4dcad0c3cca67bf513a7c08dc911bf674';
const PRIVATE_KEY = '5f190ef4dcad0c3cca67bf513a7c08dc911bf674';

const initialPayload = {
  merchantAccount: 'main_d1wdeqzlr1fr6a_amplifyapp_com',
  merchantDomainName: 'https://main.d1wdeqzlr1fr6a.amplifyapp.com',
  merchantAuthType: 'SimpleSignature',
  orderReference: Math.random().toString(36).substring(7), // Unique order ID
  orderDate: Math.floor(new Date().getTime() / 1000),
  amount: '1',
  currency: 'UAH',
  productName: ['Процессор Intel Core i5-4670 3.4GHz'],
  productPrice: ['1'],
  productCount: ['1'],
  clientFirstName: 'Василь',
  clientLastName: 'Пібаренко',
  clientEmail: 'some@mail.com',
  clientPhone: '380631234567',
  language: 'UA',
};
const generateHmacMd5 = (string: string, key: string) => {
  // Generate HMAC-MD5 hash
  return CryptoJS.HmacMD5(string, key).toString();
};
const handleHash = (data: any) => {
  const string = [
    data.merchantAccount,
    data.merchantDomainName,
    data.orderReference,
    data.orderDate,
    data.amount,
    data.currency,
    ...data.productName,
    ...data.productCount,
    ...data.productPrice,
  ].join(';');
  const key = PRIVATE_KEY;
  const hmac = generateHmacMd5(string, key);
  console.log('Generated HMAC-MD5:', hmac);
  return hmac;
};

// Declare Wayforpay on the window object
declare global {
  interface Window {
    Wayforpay: any;
  }
}

console.log(Math.random().toString(36).substring(7));

const WayForPayWidget = () => {
  // Dynamically load WayForPay script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://secure.wayforpay.com/server/pay-widget.js';
    script.id = 'widget-wfp-script';
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Payment function
  const pay = () => {
    if (window.Wayforpay) {
      const wayforpay = new window.Wayforpay();

      wayforpay.run(
        {
          ...initialPayload,
          merchantSignature: handleHash(initialPayload), // Replace with a real signature
        },
        function (response: any) {
          console.log('Payment approved:', response);
          // Handle successful payment
        },
        function (response: any) {
          console.log('Payment declined:', response);
          // Handle declined payment
        },
        function (response: any) {
          console.log('Payment is pending:', response);
          // Handle pending payment
        }
      );
    } else {
      console.error('WayForPay script not loaded');
    }
  };

  return (
    <div>
      <h1>WayForPay Payment</h1>
      <button onClick={pay}>Оплатить</button>
    </div>
  );
};

export default WayForPayWidget;
