import React from 'react'
import Task from './task'
import AddTask from './addTask'

const Tasks = ({ tasks }) => {
    console.log(tasks)
    return (
        <>
            <h1>{tasks.map(task => <Task task={task} />)}</h1>
        </>
    )
}

export default Tasks