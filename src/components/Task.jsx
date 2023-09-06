import React from 'react';
import '../stylesheets/Task.css';
import { BsTrash2, BsFillBrushFill } from 'react-icons/bs'

function Task({ id, text, completed, edit, markAsCompleted, editTask, deleteTask }) {

  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      <div
        className='task-text'
        onClick={() => markAsCompleted(id)}>
        {text}
      </div>
      <div
        className='task-icon-container'
        onClick={() => editTask(id)}>
        <BsFillBrushFill className='task-icon' />
      </div>
      <div
        className='task-icon-container'
        onClick={() => deleteTask(id)}>
        <BsTrash2 className='task-icon' />
      </div>
    </div>
  )

}

export default Task;