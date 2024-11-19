import LiqPayWidget from 'components/LiqPayWidget';

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <div>
      <LiqPayWidget />
    </div>
  );
}

export default App;
