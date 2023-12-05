import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskModalButton from './TaskModalButton';

import TaskContextProvider from '../../Contexts/TaskContext';

const TaskContainer = () => {
    return ( 
        <section id="task-container">
            <TaskContextProvider>
                <h2 className="title">Tasks</h2>
                <TaskList></TaskList>
                <TaskModalButton />
                <TaskForm></TaskForm>
            </TaskContextProvider>
        </section>
    );
}
 
export default TaskContainer;