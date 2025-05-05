import './sort.css'

export function Sort ({todos , setTodos , sortChecked , setSortchecked , sortUnchecked , setSortunchecked, sortAll , setSortall }) {
    function checked () {
        setTodos(todos.filter((todo) => todo.checked === true))
    }

    function unChecked () {
        setTodos(todos.filter((todo) => todo.checked === false))
    }

    function all () {
        setTodos(todos.filter((todo) => todo))
    }

    return (
        <div className='sortDiv'>
        <button className='sort' onClick={checked}>Checked</button>
        <button className='sort' onClick={unChecked}>Unchecked</button>
        <button className='sort' onClick={all}>All</button>
        </div>
    )
}