import { useLocation } from 'react-router-dom';

const ErrorPage = () => {
  const location = useLocation();

  // Extract query parameters
  const queryParams = new URLSearchParams(location.search);
  const data = queryParams.get('data');
  const signature = queryParams.get('signature');

  return (
    <div>
      <h1>Payment Error</h1>
      {data ? (
        <>
          <p>
            <strong>Data:</strong> {data}
          </p>
          <p>
            <strong>Signature:</strong> {signature}
          </p>
        </>
      ) : (
        <p>No payment information available.</p>
      )}
    </div>
  );
};

export default ErrorPage;
