import { useEffect } from 'react';

export const useWayForPayData = () => {
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
};
