import { PayloadType } from './types';

// TODO: Need to move to .env file and use process.env
export const PUBLIC_KEY = 'sandbox_i74735937130';
export const PRIVATE_KEY = 'sandbox_aXWXbdjsD0RtJkDRh0VHaS698ksrMBqRy63cbSVc';

export const utf8ToBase64 = (str: string) => {
  const utf8Bytes = new TextEncoder().encode(str);
  return btoa(String.fromCharCode(...utf8Bytes));
};

export const generateLiqPaySignature = async (
  privateKey: string,
  data: string
) => {
  // Concatenate privateKey + data + privateKey
  const concatenatedString = privateKey + data + privateKey;

  // Encode concatenated string into ArrayBuffer
  const encoder = new TextEncoder();
  const buffer = encoder.encode(concatenatedString);

  // Generate SHA-1 hash
  const hashBuffer = await crypto.subtle.digest('SHA-1', buffer);

  // Convert hashBuffer to Base64
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const base64Hash = btoa(String.fromCharCode(...hashArray));

  return base64Hash;
};

export const initialPayload: PayloadType = {
  public_key: PUBLIC_KEY,
  version: 3,
  action: 'pay',
  amount: 99,
  currency: 'UAH',
  description: 'Оплата від',
  order_id: 'order_id_' + Math.random().toString(36).substring(7),
  //TODO:Need to change for real project URL
  // result_url: 'http://localhost:3000/success',
};

// Encode payload to Base64
export const base64Data = utf8ToBase64(JSON.stringify(initialPayload));
