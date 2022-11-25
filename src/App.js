import { useState } from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { Form } from './components/Form/Form';
import { Thanks } from './components/Thank/Thanks';

function App() {

  const [name, setName] = useState(null)
  const [number, setNumber] = useState(null)
  const [cvc, setCvc] = useState(null)
  const [mm, setMM] = useState(null)
  const [yy, setYY] = useState(null)
  const [nameError, setNameError] = useState(null)
  const [cardError, setCardError] = useState(null)
  const [mmError, setMmError] = useState(null)
  const [yyError, setYyError] = useState(null)
  const [cvcError, setCvcError] = useState(null)
  const [showThank, setShowThank] = useState(true)




  return (
    <div className="App">
      <Card
        cvc={cvc}
        name={name}
        number={number}
        mm={mm}
        yy={yy}
      />

      {showThank ?
        <Form
          cvc={cvc}
          setCvc={setCvc}
          name={name}
          setName={setName}
          number={number}
          setNumber={setNumber}
          mm={mm}
          setMM={setMM}
          yy={yy}
          setYY={setYY}
          nameError={nameError}
          setNameError={setNameError}
          cardError={cardError}
          setCardError={setCardError}
          mmError={mmError}
          setMmError={setMmError}
          yyError={yyError}
          setYyError={setYyError}
          cvcError={cvcError}
          setCvcError={setCvcError}
          setShowThank={setShowThank}
        />
        :
        <Thanks
          setShowThank={setShowThank}
          setName={setName}
          setNumber={setNumber}
          setMM={setMM}
          setYY={setYY}
          setCvc={setCvc}
        />
      }
    </div>
  );
}

export default App;
