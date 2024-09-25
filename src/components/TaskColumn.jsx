import React from 'react';
import TaskCard from './TaskCard';
import DropArea from './DropArea';

const TaskColumn = ({ title, tasks, status, setDraggingTask, onDrop }) => {
    return (
        <div

            className='flex flex-col gap-4 border border-white-300 rounded-md p-4 border-dotted border-spacing-1 min-h-[500px]'>
            <h2 className='text-2xl font-medium'>{title}</h2>
            <DropArea onDrop={() => onDrop(status, 0)} />
            {
                tasks && tasks.length > 0 && tasks.map((task, index) => {
                    if (task.status === status) {
                        return (
                            <React.Fragment key={task.id}>
                                <TaskCard
                                    key={task.id}
                                    index={index}
                                    title={task.title}
                                    description={task.description}
                                    setDraggingTask={setDraggingTask}
                                />
                                <DropArea onDrop={() => onDrop(status, index + 1)} />
                            </React.Fragment>

                        )
                    }
                })
            }
        </div>
    )
}

export default TaskColumn;