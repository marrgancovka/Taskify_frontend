import "./NewTask.css";
import Input from "../Input/Input";
import { useRef, useEffect } from 'react';
import { useState } from "react";
import Button from "../Button/Button"


const NewTask = ({onClose}) => {
  const priority = [
    {id:10, name: '10', title:'Приоритет не выбран'},
    {id:1, name: '1', title:'Низкий приоритет'},
    {id:2, name: '2', title:'Средний приоритет'},
    {id:3, name: '3', title:'Высокий приоритет'},
  ]
  const sections = [
    {id:10, name: '10', title:'Раздел не выбран'},
    {id:1, name: '1', title:'Первый раздел'},
    {id:2, name: '2', title:'Второй раздел'},
    {id:3, name: '3', title:'Третий раздел'},
  ]
  const textareaRef = useRef(null);
  const [date, setDate] = useState('');

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Сбрасываем высоту
      textarea.style.height = `${textarea.scrollHeight}px`; // Устанавливаем новую высоту
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      handleInput(); // Для установки высоты при начальной загрузке
    }
  }, []);

  return (
    <div className="new-task">
        <Input mode={'string'} placeholder={'Название задачи'} weight={'regular'}/>
        <Input area={true} placeholder={'Описание задачи'} weight={'small'} mode={'string'} ref={textareaRef} onInput={handleInput}/>
        <div className="new-task__property">
          <Input type={'date'} onChange={handleChangeDate} placeholder={'Срок'} value={date} weight={'small'}/>
          <Input select={true} options={priority} weight={'small'}/>
        </div>
        <div className="new-task__bottom">
          <Input select={true} options={sections} mode={'string'} weight={'small'}/>
          <div className="new-task__buttons">
            <Button mode={'secondary'} text={'Отмена'} weight={'regular'} onClick={onClose}/>
            <Button text={'Готово'} weight={'regular'}/>
          </div>
        </div>
    </div>
  );
};

export default NewTask;
