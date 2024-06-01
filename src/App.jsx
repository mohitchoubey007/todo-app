import { useState } from 'react'
import TodoList from './todo_list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>to do app</h1>
    <TodoList></TodoList>
    </>
  )
}

export default App
