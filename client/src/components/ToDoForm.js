import {useState} from "react";

function ToDoForm({addTask}) {
    const [userInput, setUserInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}
                onChange={handleChange}
            />
            <button>Add</button>
        </form>
    )



}

export default ToDoForm