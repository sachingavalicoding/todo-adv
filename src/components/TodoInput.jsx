import { IoAddOutline } from "react-icons/io5";
import { useTodo } from "../contexts";
import { useState } from "react";
const TodoInput = () => {
    const { addTodo } = useTodo();
    const [todo, setTodo] = useState('');
    const add = (e) => {
        if (!todo) {
            return
        }
        else {
            addTodo({ todo, completed: false })
            setTodo(" ")
        }
    }
    return (
        <div className="input__container">
            <input type="text" placeholder="Enter Your Tasks .... " value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button className="btn btn-pri" onClick={add}> <IoAddOutline />  </button>
        </div>
    )
}

export default TodoInput