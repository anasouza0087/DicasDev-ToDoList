import React from 'react'
import Task from './task'
import AddTask from './addTask'

const Tasks = ({ tasks, handleTaskClick, handleTaskRemove }) => {
    return (

        <h1>{tasks.map(task =>
            <Task
                key={task.id}
                task={task}
                handleTaskClick={handleTaskClick}
                handleTaskRemove={handleTaskRemove} />
        )}
        </h1>

    )
}

export default Tasks