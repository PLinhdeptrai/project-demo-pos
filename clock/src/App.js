import { useState } from 'react';
import './App.css';
import { Clock } from './components/Clock';


function App() {

  const [message, setMessage] = useState(null);

  return (
    <>
      <Clock />
      
    </>
  );
}

export default App;