import React, { useState, type FormEvent } from "react";
import { useTodos } from "../store/todos";

const AddToDO = () => {
    const [todo, setTodo] = useState("");
    const {handleAddToDO} = useTodos();

    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        handleAddToDO(todo)
            setTodo("")
        
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddToDO;