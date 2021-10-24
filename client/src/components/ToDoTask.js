import {useState} from "react";

const ToDoTask = ({item, remoteTask, changeFlag}) => {
    const [checked, setChecked] = useState(false)


    return (
        <div className="taskBlock">
            <div className="elem-checkbox">
                <input type='checkbox' onClick={()=> changeFlag(item.id)} />
            </div>
            <div className="elem-task">
                <div className={item.flag ? "ready": "not-ready"}>
                    {item.task}
                </div>
            </div>
            <div className="elem-delete">
                    <button  className="btn-del" onClick={()=> remoteTask(item.id)}>X</button>
            </div>
        </div>

    )



}


export default ToDoTask