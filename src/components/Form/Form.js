import React from 'react';
import './Form.css';
import InputMask from 'react-input-mask';


function Form(props) {
  const [isTextareaEnabled, setIsTextareaEnabled] = React.useState(true);
  const [isUploadEnabled, setIsUploadEnabled] = React.useState(true);
  const [fileName, setFileName] = React.useState('');
  const [isFileUploaded, setIsFileUploaded] = React.useState(false);
  const inputRef = React.useRef(null);
  const [isValidPhone, setIsValidPhone] = React.useState(true);

  function handleFillInput(e) {
    setIsUploadEnabled((e.target.value === ''));
  }

  function handleUploadFile(e) {
    setIsFileUploaded(true);
    setIsTextareaEnabled(false);
    setFileName(e.target.value.replace(/.+[\\]/, ""));
  }

  function handleDeleteButtonClick() {
    inputRef.current.value = null;
    setIsFileUploaded(false);
    setIsTextareaEnabled(true);
  }

  function validatePhone(e) {
    setIsValidPhone((e.target.value && e.target.value.replace(/\D/g, '').length === 11));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isValidPhone) {
      e.target.submit();
    }
  }

  return (
    <section className='customerform'>
      <form onSubmit={handleSubmit} className='customerform__form form'>
        <h2 className='form__title'>Сообщение в свободной форме</h2>
        <div className='form__input-container'>
          <input className='form__input' type='text' id='name' placeholder='Ваше имя' required />
          <label className='form__label' htmlFor='name'>Ваше имя</label>
        </div>
        <div className='form__input-container'>
          <input className='form__input' type='text' id='company' placeholder='Компания' required />
          <label className='form__label' htmlFor='company'>Компания</label>
        </div>
        <div className='form__input-container'>
          <InputMask
            id='phone'
            type='tel'
            mask='+7-999-999-99-99'
            className={`form__input ${!isValidPhone ? 'form__input_type_error' : ''}`}
            placeholder='Телефон'
            minLength='16'
            required
            onChange={validatePhone}
          />
          <label className='form__label' htmlFor='phone'>Телефон</label>
        </div>
        <div className='form__input-container'>
          <input className='form__input' type='email' id='email' placeholder='Электронная почта' required />
          <label className='form__label' htmlFor='email'>Электронная почта</label>
        </div>
        <div className='form__input-container'>
          <textarea onChange={handleFillInput} className='form__textarea' placeholder='Напишите текст обращения' disabled={!isTextareaEnabled} required/>
          <button type='button' onClick={props.onButtonClick} className='form__textarea-button' />
        </div>
        <div className='form__input-container form__input-container_type_upload'>
          <input ref={inputRef} onChange={handleUploadFile} type='file' accept='.doc, .docx, .txt, .pdf' className='form__input form__input_type_upload' id='upload'  required disabled={!isUploadEnabled}/>
          <label className='form__label form__label_type_upload' htmlFor='upload'>или прикрепите файл</label>
          <div className={`form__filename-container ${isFileUploaded ? 'form__filename-container_shown' : ''}`}>
            <span className='form__filename'>{fileName}</span>
            <button onClick={handleDeleteButtonClick} className='form__upload-button' type='button' />
          </div>
        </div>
        <div className='form__submit-container'>
          <input className='form__input form__input_type_agreement' id='agreement' type='checkbox' required />
          <label className='form__label form__label_type_submit' htmlFor='agreement'>согласен на обработку моих <a href='/' className='form__agreement-link'>персональных данных</a></label>
          <button type='submit' className='form__button'>Отправить</button>
        </div>
      </form>
    </section>
  )
}

export default Form;
