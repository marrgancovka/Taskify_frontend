import "./TaskForm.css";
import Input from "../Input/Input";
import { useState } from 'react';

const TaskForm = ({ taskId, onClose }) => {
  const [priority, setPriority] = useState('normal');
  const [list, setList] = useState('');
  const [dueDate, setDueDate] = useState('');

  const lists = [
    { name: 1, title: "Работа" },
    { name: 2, title: "Дом" },
    { name: 3, title: "Учеба" },
    { name: 4, title: "Личное" },
  ];
  const options = [
    { name: 1, title: "Низкий" },
    { name: 2, title: "Средний" },
    { name: 3, title: "Высокий" },
  ];


  return (
    <div className="task-form" onClick={onClose}>
      <div className="task-form__main" onClick={(e)=>e.stopPropagation()}>
        <div className="task-form__head">
          <div onClick={onClose} className="task-form__close">x</div>
        </div>
        <div className="task-form__content">
          <div className="task-form__left">
            <div className="task-form__title">
              <Input value={`Заголовок задачи #${taskId}`} mode={"string"} weight={'bold'}/>
              <Input placeholder="Описание задачи" mode={"string"} area={true}/>
            </div>
            <div className="task-form__active">
              <h5>Активность</h5>

            </div>
          </div>

          <div className="task-form__right">

            <Input type={'date'} label={"Срок выполнения"} value/>
            <Input select={true} options={options} label={'Приоритет'} value={'Выберите приоритет'}/>
            <Input select={true} options={lists} label={'Список'} value={'s'}/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
