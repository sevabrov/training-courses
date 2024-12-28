import { handleHash, initialPayload } from './helper';
import { useWayForPayData } from './useWayForPayData';

// Declare Wayforpay on the window object
declare global {
  interface Window {
    Wayforpay: any;
  }
}

type WayForPayWidgetProps = {
  productName: string; //productName: ['Курси...'],
  productPrice: number; //productPrice: ['1'],
  productCount?: number; //productCount: ['1'],
  clientFirstName: string;
  clientLastName: string;
  clientEmail: string; //'some@mail.com'
  clientPhone: string; //'380631234567'
};

const WayForPayWidget = ({
  productName,
  productPrice,
  productCount = 1,
  clientFirstName,
  clientLastName,
  clientEmail,
  clientPhone,
}: WayForPayWidgetProps) => {
  // Dynamically load WayForPay script
  useWayForPayData();

  // Payment function
  const pay = () => {
    if (window.Wayforpay) {
      const wayforpay = new window.Wayforpay();

      const payloadData = {
        ...initialPayload,
        productName: [productName],
        productPrice: [productPrice.toString()],
        productCount: [productCount.toString()],
        clientFirstName,
        clientLastName,
        clientEmail,
        clientPhone,
      };

      wayforpay.run(
        {
          ...payloadData,
          merchantSignature: handleHash(payloadData), // Replace with a real signature
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
      <button className='btn' onClick={pay}>
        Оплатить
      </button>
    </div>
  );
};

export default WayForPayWidget;
