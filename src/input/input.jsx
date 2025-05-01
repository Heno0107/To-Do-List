import './input.css'

export function Input ({text , onChange , arr , setArr}) {

    function add () {
        if(text.trim()){
            setArr((prev) => {
                return  [...prev , {id : Date.now(),title : text,checked : false}]
            })

            onChange('')
        }
    }

    return (
        <div className='inpContainer'>
            <input type='text' placeholder='Type text' value={text} onChange={(e) => onChange(e.target.value)}/>
            <button onClick={add}>Add</button>
        </div>
    )
}