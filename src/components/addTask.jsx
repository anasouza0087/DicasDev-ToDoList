import React, { useState } from 'react'
import Button from './button'

import './addTask.css'

const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState("")

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData('')
    }

    return (
    
            <div className="addTask-container">
                <input onChange={handleInputChange}
                    value={inputData}
                    className="add-task-input" type="text" />
                <container className="add-task-button-container">
                    <Button onClick={handleAddTaskClick}>Adicionar</Button>
                </container>
            </div>
        
    )
}

export default AddTask
