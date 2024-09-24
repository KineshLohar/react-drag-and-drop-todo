import React from 'react';
import TaskCard from './TaskCard';

const TaskColumn = ({title, tasks}) => {
    return (
        <div className='flex flex-col gap-4 border-gray-300 rounded-md p-4 border-dotted border-spacing-1'>
            <h2 className='text-2xl font-medium'>{title}</h2>
            {
                tasks && tasks.length > 0 && tasks.map((task) => {
                    return (
                        <TaskCard
                        
                        />
                    )
                })
            }
        </div>
    )
}

export default TaskColumn;