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
        <form className="block-form" onSubmit={handleSubmit}>
            <div className="block-user-input">
                <input className="place-input"
                    value={userInput}
                    onChange={handleChange}
                />
            </div>
            <div className="block-add-item">
                <button className="btn-add-item">Add</button>
            </div>

        </form>
    )



}

export default ToDoForm