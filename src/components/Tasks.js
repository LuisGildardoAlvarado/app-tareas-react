import React from "react";
import '../styles/Tasks.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task({ text, completed }){
    return(
        <div className={completed ? "task-container completed" : "task-container"}>
            <div className="task-text">
                {text}
            </div>
            <div className="task-icons-container">
                <AiOutlineCloseCircle className="task-icon"/>
            </div>
        </div>
    );
}

export default Task


