import {useState} from "react";

function ToDoForm() {
    const [value, setValue] = useState([])
    const addTask = () => {

    }
    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={addTask}> Add</button>
        </div>
    )

}

export default ToDoForm