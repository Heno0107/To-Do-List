import './App.css'
import { useState } from 'react'
import { Input } from './input/input'
import { Todo } from './todo/todo'
import { Sort } from './sort/sort'

function App() {
  const [text , setText] = useState('')
  const [todos , setTodos] = useState([])
  const [task , setTask] = useState(text)
  const [sortChecked , setSortchecked] = useState([])
  const [sortUnchecked , setSortunchecked] = useState([])
  const [sortAll , setSortall] = useState([])

  return (
    <>
      <h1>TO DO LIST</h1>
      <Sort todos = {todos} setTodos={setTodos} sortChecked = {sortChecked} setSortchecked = {setSortchecked} sortUnchecked = {sortUnchecked} setSortunchecked = {setSortunchecked} sortAll = {sortAll} setSortall = {setSortall}/>
      <Input text={text} onChange={setText} arr = {todos} setArr={setTodos}/>
      <Todo todosArr={todos} setTodosArr={setTodos} task = {task} setTask = {setTask}/>
      {console.log(todos)}
    </>
  )
}

export default App