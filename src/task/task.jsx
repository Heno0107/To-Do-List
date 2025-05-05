import './task.css'

export function Task ({todosArr , change , task , setTask , editChange , remove}) {
    return ( <ul>
        {todosArr.map((todo) => {
            console.log(todo)
            console.log(todosArr)
            return <div key={todo.id} className='todo'>
            <input type="checkbox" checked = {todo.checked} onChange = {() => change(todo.id)} />
            {todo.editable ? <input className='taskInp' type="text" value={task} onChange={(e) => setTask(e.target.value)} onBlur={() => editChange(todo.id) } /> : <span onDoubleClick={() => editChange(todo.id)}>{todo.title}</span>}
            <button className='todoBtn' onClick={() => remove(todo.id)}>X</button>
        </div>
    })}
    </ul> )
}