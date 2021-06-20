import React, { useState } from 'react'
import Tasks from './components/tasks'
import AddTask from './components/addTask'
import './App.css'

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false
    },
    {
      id: '2',
      title: 'Ler',
      completed: true
    },
    {
      id: '3',
      title: 'Fazer exercicios',
      completed: true
    }
  ])

  return (
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </>
  )

}

export default App