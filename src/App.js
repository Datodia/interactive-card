import { useState } from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { Form } from './components/Form/Form';

function App() {

  const [name, setName] = useState(null)
  const [number, setNumber] = useState(null)


  return (
    <div className="App">
      <Card name={name} number={number} />
      <Form name={name} setName={setName} number={number} setNumber={setNumber} />
    </div>
  );
}

export default App;
