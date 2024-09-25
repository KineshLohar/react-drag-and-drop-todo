import React from 'react'

const TaskCard = ({ title, description, index, setDraggingTask, handleDelete }) => {
  return (
    <div
      draggable
      onDragStart={() => setDraggingTask(index)}
      onDragEnd={() => setDraggingTask(null)}
      className='bg-white-300 rounded-md p-4 border border-white-300 hover:border-blue-500 hover:cursor-grab'
    >
      <div className='flex items-center justify-between'>
      <h3 className='text-xl font-medium'>{title}</h3>
      <button className='text-red-500' onClick={() => handleDelete(index)}>X</button>
      </div>
      
      <p className='text-sm'>{description}</p>
      
    </div>
  )
}

export default TaskCard