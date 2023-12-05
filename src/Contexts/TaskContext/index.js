import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const defaultTask =  [
        { id : 1, complete: false, title : 'Save the world again 🌎', priority: 'low', minutes: 2, seconds : 30 },
        { id : 2, complete: false, title : 'Do some push-up 💪', priority: 'medium', minutes: '15', seconds : '00' },
        { id : 3, complete: false, title : 'Watch La casa de Papel season 4 episode 6 💔', priority: 'high', minutes: '50', seconds : '00' },
    ];
    const [tasks, setTask] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    
    useEffect(() => {
        let localStorageData = JSON.parse(localStorage.getItem("Timer_Task"));
        if(localStorageData){
            setTask(localStorageData);
        }
        else{
            localStorage.setItem('Timer_Task', JSON.stringify(defaultTask));
            setTask(defaultTask);
        }
    }, []);

    const addTask = (title, priority, minutes, seconds) => { 
        console.log(priority)
        const newTasks = [...tasks, {
            id: uuidv4(),
            complete: false,
            title,
            priority,
            minutes,
            seconds  
        }];

        setTask(newTasks)
        localStorage.setItem('Timer_Task', JSON.stringify(newTasks));
        toast.info("🔥 A new task has been added ! 🔥", {autoClose : 3000, position: toast.POSITION.BOTTOM_CENTER});
    }

    const removeTask = (id) => {
        const newTasks = tasks.filter(task => task.id !== id)
        setTask(newTasks);
        localStorage.setItem('Timer_Task', JSON.stringify(newTasks));
        toast.success("Your task has been removed ! 🚀", {autoClose : 3000, position: toast.POSITION.BOTTOM_CENTER});
    }

    const setComplete = (id) => {
        let TaskToUpdate = tasks.filter(task => task.id === id );
        // because filter return a array
        TaskToUpdate = TaskToUpdate[0];
        // set it to complete
        TaskToUpdate.complete = !TaskToUpdate.complete;
        // get other task
        const filteredTask = tasks.filter(task => task.id !== id);
        const newTasks = [...filteredTask, TaskToUpdate];
        // put the updated new task
        setTask(newTasks);
        localStorage.setItem('Timer_Task', JSON.stringify(newTasks));
        toast.info("✔️ Nice work ! Keep up ! 😊", {autoClose : 3000, position: toast.POSITION.BOTTOM_CENTER});
    }

    const  toggleVisibilityModal = () => {
        setIsOpenModal(!isOpenModal);
    }

    return (
        <TaskContext.Provider value={{tasks, addTask, removeTask, setComplete, isOpenModal, toggleVisibilityModal}} >
            <ToastContainer />
            { props.children }
        </TaskContext.Provider>
    )
}

export default TaskContextProvider;