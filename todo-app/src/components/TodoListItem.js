import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
  } from 'react-icons/md';
import './TodoListItem.css';

const TodoListItem = ({todo}) => {
    const {text,checked} = todo;
    return (
        <div className='TodoListItem'>
            <div className={checked ? 'checkbox checked' : 'checkbox'}>
                {
                    checked ? <MdCheckBox/>:<MdCheckBoxOutlineBlank />
                }
                <div className='text'>{text}</div>
            </div>
            <div className='remove'>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;