import React, { useContext } from 'react';
import { TaskContext } from '../../../Contexts/TaskContext';
import TaskItem from  '../TaskItem';

const TaskList = () => {
    const { tasks } = useContext(TaskContext);

    return ( 
        tasks.length > 0 ? (
            <ul>
                {
                    tasks.map(task => {
                        return (<TaskItem task={task} key={task.id} />)
                    })
                }
            </ul>
        ) : (
            <div className="empty-tasks"> 
                No Tasks Left,  yheaaah free time <span role="img" aria-label="dolphin">🐬</span><br />
                Clic down <span role="img" aria-label="arrow-down">⬇️</span> bellow to add new Task <span role="img" aria-label="check">✅</span>
            </div>
        )
    );
}
 
export default TaskList;