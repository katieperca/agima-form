import React from 'react';
import './Instruction.css'

function Instruction(props) {
  return (
    <section className='instruction'>
      <h2 className='instruction__title'>Что написать в сообщении или файле?</h2>
      <ol className='instruction__list'>
        <li className='instruction__item'>
          <h3 className='instrustion__item-title'>Чем вы занимаетесь?</h3>
          <p className='instruction__question'>Расскажите о своей компании.</p>
          <p className='instruction__question'>Как работаете, на чем зарабатываете?</p>
          <p className='instruction__question'>Кто ваши конкуренты?</p>
          <p className='instruction__question'>Чем вы от них отличаетесь?</p>
        </li>
        <li className='instruction__item'>
          <h3 className='instrustion__item-title'>В чем ваша задача?</h3>
          <p className='instruction__question'>Чего хотите достичь в ближайшем будущем?</p>
          <p className='instruction__question'>Что вам мешает?</p>
        </li>
        <li className='instruction__item'>
          <h3 className='instrustion__item-title'>Каким вы видите решение задачи?</h3>
          <p className='instruction__question'>Как планируете достичь своих целей?</p>
          <p className='instruction__question'>Какие решения пробовали раньше?</p>
        </li>
        <li className='instruction__item'>
          <h3 className='instrustion__item-title'>Какие у вас ожидания от результата?</h3>
          <p className='instruction__question'>В каком виде вы хотите видеть решение вашей задачи?</p>
          <p className='instruction__question'>В какой срок?</p>
          <p className='instruction__question'>Почему он важен? На что это должно быть похоже?</p>
        </li>
        <li className='instruction__item'>
          <h3 className='instrustion__item-title'>Сколько денег планируете потратить?</h3>
          <p className='instruction__question'>Каков ваш бюджет? </p>
          <p className='instruction__question'>Почему вы готовы потратить именно такую сумму?</p>
        </li>
      </ol>
      <button onClick={props.onButtonClick} type='button' className='instruction__button button'>Вернуться к заполнению</button>
    </section>
  )
}

export default Instruction;