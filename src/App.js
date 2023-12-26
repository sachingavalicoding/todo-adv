import { useEffect, useState } from 'react'
import { Todoprovider } from './contexts/index'
import TodoInput from './components/TodoInput';
import TodoItems from './components/TodoItems';
const App = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map(prevTodo => prevTodo.id === id ? todo : prevTodo))
  }
  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }
  const delatedTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }


  //  local storage 
  // get items 
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // set items 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <Todoprovider value={{ todos, toggleTodo, addTodo, updateTodo, delatedTodo }}>
      <div className='todo__container'>
        <h1> Todo App </h1>
        {/*  input box  */}
        <TodoInput />
        <div className='todoItems__container'>
          {/*  todo items  */}
          {
            todos.map((todo) => {
              return (
                <div key={todo.id}>
                  <TodoItems todo={todo} />
                </div>
              )
            })
          }

        </div>
        <div className="todo__info-container">
          {/*  Info component  */}

        </div>
      </div>
    </Todoprovider>
  )
}

export default App