import { useState } from 'react';
import './App.css';
import TaskColumn from './components/TaskColumn';

const initialTasks = [
  {
    id: 1,
    title: 'To doooo',
    description: 'Description 1',
    status: 'todo',
  },
  {
    id: 2,
    title: 'Doing something',
    description: 'Description 2',
    status: 'inProgress',
  },
  {
    id: 3,
    title: ' easily done',
    description: 'Description 3',
    status: 'done',
  },
];

function App() {
  const [tasks, setTasks] = useState([...initialTasks]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [draggingTask, setDraggingTask] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      const newTask = {
        id: prev.length + 1,
        title: taskTitle,
        description: taskDescription,
        status: 'todo'
      }
      return [...prev, newTask];
    });
    setTaskTitle('');
    setTaskDescription('');
  };

  const onDrop = (status, position) => {
    console.log(status, position);

    if(!draggingTask) return console.log('no dragging task');;

    const taskToMove = tasks[draggingTask]
    const updatedTasks = tasks.filter((_, index) => index !== draggingTask);

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status : status
    });

    setTasks(updatedTasks);
  }

  return (
    <div className="flex flex-col items-stretch justify-start px-16 bg-[#131313] text-white h-screen overflow-y-scroll">
      <h1 className='text-4xl font-medium my-8 mx-auto '>React Drag and Drop Todo List</h1>
      <div className='flex flex-col gap-4'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center justify-center mb-8'>
          <input type="text" placeholder='Task Title' onChange={(e) => setTaskTitle(e.target.value)} value={taskTitle} className='bg-transparent border-2 border-white-300 rounded-md p-2 text-white w-6/12' />
          <input type="text" placeholder='Task Description' onChange={(e) => setTaskDescription(e.target.value)} value={taskDescription} className='bg-transparent border-2 border-white-300 rounded-md p-2 text-white w-6/12' />
          <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>Add Task</button>
        </form>
        {/* <div className='flex flex-col gap-4 text-white'>draggin task{draggingTask}</div> */}
      </div>
      <div className=' grid grid-cols-3 gap-4'>
        <TaskColumn
          title="To Do" 
          tasks={tasks} 
          status="todo" 
          setDraggingTask={setDraggingTask} 
          draggingTask={draggingTask} 
          onDrop={onDrop}
        />
        <TaskColumn 
          title="In Progress" 
          tasks={tasks} 
          status="inProgress" 
          setDraggingTask={setDraggingTask} 
          draggingTask={draggingTask} 
          onDrop={onDrop}
        />
        <TaskColumn 
          title="Done" 
          tasks={tasks} 
          status="done" 
          setDraggingTask={setDraggingTask} 
          draggingTask={draggingTask} 
          onDrop={onDrop}
        />
      </div>
    </div>
  );
}

export default App;
