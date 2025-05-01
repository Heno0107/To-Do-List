import './todo.css'

export function Todo ({todosArr , setTodosArr}) {
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

    return (
        <ul>
            {todosArr.map((todo) => {
                return <div key={todo.id} className='todo'>
                <input type="checkbox" checked = {todo.checked} onChange={() => change(todo.id)}/>
                <span>{todo.title}</span>
                <button className='todoBtn' onClick={() => remove(todo.id)}>X</button>
            </div>
    })}
    </ul>
    )
}