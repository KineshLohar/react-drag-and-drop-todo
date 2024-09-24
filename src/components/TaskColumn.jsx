import React from 'react';
import TaskCard from './TaskCard';
import DropArea from './DropArea';

const TaskColumn = ({title, tasks, status, setDraggingTask}) => {
    return (
        <div
        
        className='flex flex-col gap-4 border border-white-300 rounded-md p-4 border-dotted border-spacing-1 min-h-[500px]'>
            <h2 className='text-2xl font-medium'>{title}</h2>
            <DropArea />
            {
                tasks && tasks.length > 0 && tasks.filter((task) => task.status === status).map((task) => {
                    return (
                        <>
                        <TaskCard
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            setDraggingTask={setDraggingTask}
                        />
                        <DropArea />
                        </>
                        
                    )
                })
            }
        </div>
    )
}

export default TaskColumn;