import Modal from 'react-modal';
import HomePage from 'pages/home/HomePage';

// Set the root element for accessibility
Modal.setAppElement('#root');

function App() {
  //TODO: Need to use it for liqpay API for detecting result_url
  console.log(process.env.NODE_ENV);
  return (
    <div className='light-theme'>
      <HomePage />
    </div>
  );
}

export default App;
