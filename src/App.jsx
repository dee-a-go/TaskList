import './App.css';
import logoImage from './images/logo.jpg'
import TaskList from './components/TaskList';

export default function App() {
  return (
    <div className='App'>
      <div className='logo-container'>
        <img 
          src={''}
          className='logo'
          alt='Logo' />
      </div>
      <div className='tasklist-main'>
        <h1>My tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}
