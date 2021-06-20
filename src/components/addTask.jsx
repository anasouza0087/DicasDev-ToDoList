import React from 'react'
import Button from './button'

import './addTask.css'

const AddTask = () => {

    return (
        <>
            <div className="addTask-container">
                <input className="add-task-input" type="text" name="" id="" />
                <container className="add-task-button-container">
                    <Button>Adicionar</Button>
                </container>
            </div>
        </>
    )
}

export default AddTask
