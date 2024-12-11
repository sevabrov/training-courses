import CryptoJS from 'crypto-js';

const PRIVATE_KEY = '5f190ef4dcad0c3cca67bf513a7c08dc911bf674';

export const initialPayload = {
  merchantAccount: 'main_d1wdeqzlr1fr6a_amplifyapp_com',
  merchantDomainName: 'https://main.d1wdeqzlr1fr6a.amplifyapp.com',
  merchantAuthType: 'SimpleSignature',
  orderReference: Math.random().toString(36).substring(7), // Unique order ID
  orderDate: Math.floor(new Date().getTime() / 1000),
  amount: '1',
  currency: 'UAH',
  language: 'UA',
};

export const generateHmacMd5 = (string: string, key: string) => {
  // Generate HMAC-MD5 hash
  return CryptoJS.HmacMD5(string, key).toString();
};
export const handleHash = (data: any) => {
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
