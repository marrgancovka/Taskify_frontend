import "./TaskForm.css";  
import Input from "../Input/Input";  
import { useEffect, useState } from 'react';  
import Comment from "../Comment/Comment";
import Button from "../Button/Button";
import send from "../../assets/icons/send_24dp_434343_FILL0_wght300_GRAD0_opsz24.svg"

const TaskForm = ({ taskId, onClose }) => {  
  const task = {
    id: taskId,
    name: 'Название задачки',
    description: 'Описание нашей красивой хорошей детализированной задачки',
    due_date: "",
    priority: "3",
  }
  const priorityList = [
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

  const [priority, setPriority] = useState('normal');  
  const [list, setList] = useState('');  
  const [dueDate, setDueDate] = useState('');  
  const [isActivity, setIsActivity] = useState(false);

  useEffect(()=>{
    try{
      // запрос на получение информации о таске
    } catch {

    }
  }, [])

  return (  
    <div className="task-form">  
      <div className="task-form__info">
        <Input value={task.name} weight={'bold'} mode={'string'} placeholder={'Название задачи'}/>
        <Input area={true} placeholder={'Описание задачи'} weight={'small'} mode={'string'} value={task.description}/>
        <div className="task-form__property">
          <Input type={'date'} placeholder={'Срок'} value={task.due_date} weight={'small'}/>
          <Input select={true} options={priorityList} weight={'small'} value={task.priority} />
        </div>
      </div>
      <div className="task-form__choice">
        <h4 className={!isActivity ? "active-part" : ""} onClick={()=>{setIsActivity(false)}}>Комментарии</h4>
        <h4 className={isActivity ? "active-part" : ""} onClick={()=>{setIsActivity(true)}}>Активность</h4>
      </div>
      {isActivity &&(
        <div className="task-form__activity">
          
        </div>
      )}
      {!isActivity && (
        <div className="task-form__block-comment">
            <div className="task-form__comments">
              <Comment/>
              <Comment/>
              <Comment/>
              <Comment/>
              <Comment/>
              <Comment/>
              <Comment/>
              <Comment/>
              <Comment/>
              <Comment/>
            </div>
            <div className="task-form__enter">
              <Input placeholder={'Оставьте комментарий'} mode={'small'}/>
              <Button mode={'white'} icon={send}/>
            </div>
        </div>
      )

      }
    </div>  
  );  
};  

export default TaskForm;  
