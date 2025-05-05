import './todo.css'
import { Task } from '../task/task'

export function Todo ({todosArr , setTodosArr , task , setTask}) {
    function change(id){
        setTodosArr(todosArr.map((todo) => {
            if(id === todo.id){
                return {
                    ...todo,
                    checked : !todo.checked
                }
            }else {
                return todo
            }
        }))
    }

    function remove (id) {
        setTodosArr(todosArr.filter((todo) => todo.id !== id))
    }

    function editChange (id) {
        setTodosArr(todosArr.map((todo) => {
            if(id === todo.id){
                return {
                    ...todo,
                    title : task,
                    editable : !todo.editable
                }
            }else {
                return todo
            }
        }))
    }
    
    console.log(task)
    return (
        <Task todosArr = {todosArr} change = {change} task = {task} setTask = {setTask} editChange = {editChange} remove = {remove} />
    )
}

//todosArr , change , task , setTask , editChange , remove