import React from 'react';
import './Main.css'
import Form from '../Form/Form.js';
import Instruction from '../Instruction/Instruction.js';

function Main() {
  const [isCardFlipped, setIsCardFlipped] = React.useState(false);

  function handleButtonClick() {
    setIsCardFlipped(!isCardFlipped);
  }

  return (
    <main className='content'>
      <h1 className='content__title title'>Анкета для новых клиентов AGIMA</h1>
      <div className={`content__container ${isCardFlipped ? 'content__container_flipped' : ''}`}>
        <Form 
          onButtonClick={handleButtonClick}
          isFlipped={isCardFlipped} 
        />
        <Instruction
          onButtonClick={handleButtonClick}
          isFlipped={isCardFlipped} 
        />
      </div>
    </main>
  )
}

export default Main;