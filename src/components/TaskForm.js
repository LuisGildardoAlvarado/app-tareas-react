import React from 'react'
import '../styles/TaskForm.css'

function TaskForm(props) {
    return(
        <form className='task-form'>
            <input
                className='task-input'
                type='text'
                placeholder='Escribe una tarea'
                name='text'
            />
            <button className='task-button'>
                Agregar Tarea
            </button>
        </form>
    );
}

export default TaskForm;
