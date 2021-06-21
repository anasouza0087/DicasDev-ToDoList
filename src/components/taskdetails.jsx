import React from 'react'
import { useParams } from 'react-router';
import { useHistory } from 'react-router';

import './taskDetails.css'
import Button from './button'

const TaskDetails = () => {

    const params = useParams();
    const history = useHistory()

    const handleBackbuttonClick = () => {
        history.goBack()
    }

    return (
        <div>
            <div className="back-button-container">
                <Button onClick={handleBackbuttonClick} >Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil, aspernatur facere nostrum exercitationem aperiam deleniti voluptatem
                    necessitatibus obcaecati reprehenderit in dolores, nisi quidem qui mollitia expedita
                    sed laborum iusto vel.
                </p>
            </div>
        </div>
    )
}

export default TaskDetails