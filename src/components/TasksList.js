import React, { useState } from "react";
import TaskForm from './TaskForm'
import '../styles/TasksList.css'
import Task from "./Task";

function TasksList() {

    const[tasks, setTasks] = useState([]);

    const addTask = task => {
        if (task.text.trim()) {
            task.text = task.text.trim();

            const updateTask = [task, ...tasks];
            setTasks(updateTask);
        }
    };

    return(
        <div>
            <TaskForm onSubmit={addTask}/>
            <div className="task-list-container">
                {
                    tasks.map((task) =>
                        <Task
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        completed={task.completed}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default TasksList;