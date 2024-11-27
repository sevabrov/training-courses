import HomePage from 'pages/home/HomePage';

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
