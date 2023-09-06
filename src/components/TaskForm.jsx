import React, { useState } from 'react';
import '../stylesheets/TaskForm.css'
import generateId from '../functions/generateId';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const handleChange = event => {
    setInput(event.target.value);
  }

  const handleSend = event => {
    event.preventDefault();
    const newTask = {
      id: generateId(),
      text: input,
      completed: false,
    }
    props.onSubmit(newTask);
    setInput('');
    document.querySelector('.task-input').value = '';
  }

  return (
    <form
    className='task-form'
    onSubmit={handleSend}>
      <input 
      className='task-input'
      type='text'
      placeholder={'What\'s your next task?'}
      name='text'
      onChange={handleChange}
      />
      <button className='task-button'>
        Add task
      </button>
    </form>
  );
}

export default TaskForm;