import React from 'react'

const TaskCard = ({ title, description, index, setDraggingTask }) => {
  return (
    <div
      draggable
      onDragStart={() => setDraggingTask(index)}
      onDragEnd={() => setDraggingTask(null)}
      className='bg-white-300 rounded-md p-4 border border-white-300 hover:border-blue-500 hover:cursor-grab'
    >
      <h3 className='text-xl font-medium'>{title}</h3>
      <p className='text-sm'>{description}</p>
    </div>
  )
}

export default TaskCard