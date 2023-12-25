import { Todoprovider, useTodo, TodoContext } from './contexts/index'
const App = () => {
  const todos = [
    {

    }
  ]
  const addTodo = () => {

  }
  const updateTodo = () => {

  }
  const toggleTodo = () => {

  }
  const delatedTodo = () => {

  }
  return (
    <Todoprovider value={{ todos, toggleTodo, addTodo, updateTodo, delatedTodo }}>
      <h1> Hello </h1>
    </Todoprovider>
  )
}

export default App