import ToDoForm from "./ToDoForm";
import {useState} from "react";


const ToDoTask = (props) => {
    //const [value, setValue] = useState('')

    return (
        <p>
            {props.task}
        </p>

    )



}


export default ToDoTask