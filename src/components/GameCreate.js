import { useState } from "react";

function GameCreate( {onCreate} ) {
    const [title, setTitle] = useState('')

    function handleChange(event){
        setTitle(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        onCreate(title)
        setTitle('') 
    }


    return (
    <div className="game-create">
        <form onSubmit={handleSubmit} >
            <h3>Add new game to the list</h3>
            <input onChange={handleChange} value={title} />  
        </form>
        
    </div>
)}

export default GameCreate