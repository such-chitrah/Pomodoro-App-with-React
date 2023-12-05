import React, {useContext} from "react";
import { TaskContext } from "../../../Contexts/TaskContext";

const TaskModalButton = () => {
    const  buttonText =  "+ New Task";
    const { toggleVisibilityModal } = useContext(TaskContext);

    const openModal = () => {
        toggleVisibilityModal();
    }
    
    return (
        <>
            <div id="add-task-container">
                <button className="add-task" onClick={() => openModal()}>{buttonText}</button>
            </div>
        </>
    );
}

export default TaskModalButton;