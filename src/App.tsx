import HomePage from 'pages/HomePage';

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <div className='light-theme'>
      <HomePage />
    </div>
  );
}

export default App;
