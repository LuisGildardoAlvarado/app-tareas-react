import React, { useState } from "react";
import TaskForm from './TaskForm'
import '../styles/TasksList.css'
import Task from "./Task";

function TasksList() {

    const[tasks, setTasks] = useState([]);

    const addTask = task => {
        if (task.text.trim()) {
            task.text = task.text.trim();

            const updateTasks = [task, ...tasks];
            setTasks(updateTasks);
        }
    };

    const deleteTask = id => {
        const updateTasks = tasks.filter(task => task.id !== id);
        setTasks(updateTasks)
    };

    const completedTask = id =>{
        const updateTasks = tasks.map(task => {
            if(task.id === id){
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(updateTasks);
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
                        completedTask={completedTask}
                        deleteTask={deleteTask}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default TasksList;