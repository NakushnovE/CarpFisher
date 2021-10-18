import {useState} from "react";

const ToDoTask = ({list, remoteTask, changeFlag}) => {
    const [checked, setChecked] = useState(false)

    return (
        <div>
            <div className={list.flag ? "ready": "not-ready"}>
                {list.task}
            </div>
            <div>
                <input type='checkbox' onClick={()=> changeFlag(list.id)} />
            </div>
            <div>
                <button   onClick={()=> remoteTask(list.id)}>X</button>
            </div>
        </div>

    )



}


export default ToDoTask