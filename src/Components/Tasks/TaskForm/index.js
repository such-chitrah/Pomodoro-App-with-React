import React, {useState, useContext} from "react";
import { TaskContext } from "../../../Contexts/TaskContext";

const TaskForm = () => {
    const { addTask, isOpenModal, toggleVisibilityModal } = useContext(TaskContext);

    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('high');
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    
    const submitTask = (event) => {
        event.preventDefault();
        addTask(title, priority, minutes, seconds);
        toggleVisibilityModal(isOpenModal)
    }
    
    const changePriority = (e) => {
        setPriority(e.target.value);
    }

    return (
        <>
            <div id="modal-task" className={isOpenModal ? "openModal" : "closeModal"}>
                <form className="modal" onSubmit={submitTask}>
                    <h3>Create Task</h3>
                    <div className="input-text-container">
                        <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} required/>
                    </div>
                    <div className="checkbox-container">
                        <div className="priority-check">
                            <label className="high">
                                <input 
                                    type='radio'
                                    name='high'
                                    value='high'
                                    checked={priority === 'high'}
                                    className=""
                                    onChange={changePriority}
                                />
                                High
                            </label>
                        </div>
                        <div className="priority-check">
                            <label className="medium">
                                <input 
                                    type='radio'
                                    name='medium'
                                    value='medium'
                                    checked={priority === 'medium'}
                                    className="" 
                                    onChange={changePriority}
                                />
                                Medium
                            </label>
                        </div>
                        <div className="priority-check">
                            <label className="low">
                                <input 
                                    type='radio'
                                    name='low'
                                    value='low'
                                    checked={priority === 'low'}
                                    className="" 
                                    onChange={changePriority}
                                />
                                Low
                            </label>
                        </div>
                    </div>

                    <div className="input-text-container">
                    <input placeholder="Minutes" type="number" onChange={(e) => setMinutes(e.target.value)} /> 
                    <input placeholder="Seconds" type="number" onChange={(e) => setSeconds(e.target.value)} /> 
                    </div>

                    <div className="input-action-container">
                        <input className="validate" type="submit"  value="SUBMIT" />
                    </div>
                </form>
                <div className="overlay" onClick={() => toggleVisibilityModal()}></div>
            </div>
        </>
    );
}
 
export default TaskForm;