import React, { useState } from 'react';
import '../stylesheets/EditTaskForm.css'

function EditTaskForm(props) {

  const [input, setInput] = useState('');

  const handleChange = event => {
    setInput(event.target.value);
  }

  const handleSend = event => {
    event.preventDefault();
    const updatedText = {
      id: props.id,
      newText: input,
    }
    props.onSubmit(updatedText);
  }

  return (
    <form
    className='task-container edit-task-form'
    onSubmit={handleSend}>
      <input 
      className='edit-task-input'
      type='text'
      placeholder={props.text}
      name='text'
      onChange={handleChange}
      />
      <button className='edit-task-button'>
        Save
      </button>
      <button
        className='edit-task-button'
        onClick={() => {props.editTask(props.id)}}>
        Cancel
      </button>
    </form>
  );
}

export default EditTaskForm;