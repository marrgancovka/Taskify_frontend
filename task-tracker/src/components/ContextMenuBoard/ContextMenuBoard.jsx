import React, { useState, useEffect } from 'react';
import './ContextMenuBoard.css';

const ContextMenuBoard = ({}) => {


  return (
   <div className='board-menu'>
        <div className='board-menu__item'>
            <h6>Добавить в избранное</h6>
        </div>
        <div className='board-menu__item'>
            <h6>Редактировать</h6>
        </div>
        <div className='board-menu__item'>
            <h6>Удалить</h6>
        </div>
   </div>
  );
};

export default ContextMenuBoard;