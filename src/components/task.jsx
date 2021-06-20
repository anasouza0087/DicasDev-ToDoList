import React from 'react'
import './addTask'

const Task = ({ task }) => {

    return (
        <>
            <div className="taskContainer">{task.title}</div>
        </>
    )
}

export default Task