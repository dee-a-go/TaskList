import React, { useState } from 'react';
import '../stylesheets/TaskList.css'
import Task from './Task';
import TaskForm from './TaskForm';
import EditTaskForm from './EditTaskForm';

function TaskList() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      setTasks([task, ...tasks]);
    }
  };

  const markAsCompleted = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  const editTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.edit = !task.edit;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const changeText = ({ newText, id }) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.text = newText.trim() ? newText.trim() : task.text;
        task.edit = false;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className='task-list-container'>
        {
          tasks.map(task => {
            if (!task.edit) {
            return <Task
                      key={task.id}
                      id={task.id}
                      text={task.text}
                      completed={task.completed}
                      edit={task.edit}
                      markAsCompleted={markAsCompleted}
                      deleteTask={deleteTask}
                      editTask={editTask} />
            }
            return <EditTaskForm
                      key={task.id}
                      id={task.id}
                      text={task.text}
                      onSubmit={changeText}
                      editTask={editTask} />
          })
        }
      </div>
    </> // Empty tags = Fragment
  );
}

export default TaskList;