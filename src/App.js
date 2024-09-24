import logo from './logo.svg';
import './App.css';
import TaskColumn from './components/TaskColumn';

function App() {
  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <h1 className='Text-4xl font-medium '>React Drag and Drop Todo List</h1>
      <div className=' flex flex-row gap-4'>
        <TaskColumn />
        <TaskColumn />
        <TaskColumn />
      </div>
    </div>
  );
}

export default App;
