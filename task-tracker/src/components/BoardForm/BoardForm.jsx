import "./BoardForm.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const BoardForm = ({ boardId, onClose, isNew }) => {
    const colors = [
        {id: 1, name: 'Красный', title: 'Красный'},
        {id: 2, name: 'Синий', title: 'Синий'},
        {id: 3, name: 'Желтый', title: 'Желтый'},
        {id: 4, name: 'Розовый', title: 'Розовый'},
      ];
    
      useEffect(()=>{
        console.log(boardId)
        try{
            // запрос на получение информации о проекте для моего пользователя
        }catch{

        }
      }, [])

      

  return (
   <div className="board-form__backgroound" onClick={onClose}>
        <div className="board-form" onClick={(e)=>e.stopPropagation()}>
            <div className="board-form__content">
                <h3>{isNew ? "Новый проект" : "Изменить проект"}</h3>
                <Input label="Название" name="name" placeholder={'Введите название проекта'}/>
                <Input label="Цвет" name="color" select={true} options={colors}/>
                {/* <Input radio={true} name="color" value={"Список"}/> */}

            </div>
            <div className="board-form__button">
                <Button text="Отмена" mode={'secondary'} onClick={onClose} weight={'regular'}/>
                <Button text="Готово" weight={'regular'}/>
            </div>
        </div>
        
   </div>
  );
};

export default BoardForm;
