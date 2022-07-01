import './App.css';
import Results from './components/Results';
import Header from './components/Header';
import { useMemo, useState } from 'react';

function App() {
  const [bkg, setbkg] = useState('white');

  useMemo(() => {
    const background = document.body.style;
    background.backgroundColor === 'black' || background.backgroundColor === 'brown'
      ? (background.color = 'white')
      : (background.color = 'black');

    return (background.backgroundColor = bkg);
  }, [bkg]);

  return (
    <div className='App'>
      <Header bkg={bkg} setbkg={setbkg} />
      <Results />
    </div>
  );
}

export default App;
