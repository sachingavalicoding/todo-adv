import { FaRegEdit, FaRegSave } from "react-icons/fa"
import { MdAutoDelete } from "react-icons/md";
import { useTodo } from "../contexts";
import { useState } from "react";
const TodoItems = ({ todo }) => {
    const [check, setCheck] = useState(false);
    const [todoText, setTodoText] = useState(todo.todo);
    const { delatedTodo, updateTodo, toggleTodo } = useTodo();

    const updatedTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoText });
        setCheck(false);
    }
    const toggleTodoCheck = () => {
        toggleTodo(todo.id)
    }

    return (
        <li className="todo">
            <input
                className="checkBox"
                type="checkbox"
                checked={todo.completed}
                onChange={toggleTodoCheck}

            />
            <input
                type="text"
                readOnly={!check}
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                style={{
                    backgroundColor: `${todo.completed ? "lightgreen" : "gray"}`,
                    border: `${check ? "2px solid black" : "2px solid transparent"}`
                }} />
            <button
                className="btn btn-sec"
                onClick={() => {
                    if (todo.completed) return
                    if (check) {
                        updatedTodo();
                    } else {
                        setCheck((prev) => !prev)
                    }
                }}
                disabled={todo.completed}
            >
                {check ? <FaRegSave /> : <FaRegEdit />}
            </button>
            <button
                onClick={() => delatedTodo(todo.id)}
                className="btn btn-sec">
                <MdAutoDelete />
            </button>
        </li>
    )
}

export default TodoItems