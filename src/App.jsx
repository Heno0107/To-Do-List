import './App.css'
import { useState } from 'react'
import { Input } from './input/input'
import { Todo } from './todo/todo'

function App() {
  const [text , setText] = useState('')
  const [todos , setTodos] = useState([])

  return (
    <>
      <h1>TO DO LIST</h1>

      <Input text={text} onChange={setText} arr = {todos} setArr={setTodos}/>
      <Todo todosArr={todos} setTodosArr={setTodos}/>
      {console.log(todos)}
    </>
  )
}

export default App