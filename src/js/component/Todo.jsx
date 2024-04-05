import React from "react";
import { useState } from "react";

const Todo = () => {

    const [tasks,setTasks] = useState(["wash hands","make dinner","feed dogs"])
    const [input,setInput] = useState("")

    function agregar(e){
        console.log(e)
        if(e.key == "Enter"){
            setTasks([...tasks,input])
            setInput("")
        }
    
    }

    function deleteTask(indexDelete){
       let newTasks =  tasks.filter( (_,index)=> indexDelete != index )
       setTasks(newTasks)

    }

    function agregarInput(e){
        setInput(e.target.value)
    }
    return(
        <div className="border w-25 mx-auto my-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <div className="text-center">
            <h1 className="text-center text-secondary">TODOS</h1>
            <input className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" value={input} onChange={(e)=> agregarInput(e)} placeholder="Whats to be done" onKeyDown={(e)=> agregar(e)}/>
            {tasks.map((task,index) => <div className="d-flex justify-content-between list mx-4 borde shadow-lg p-3 mb-1 bg-body-tertiary roundedr" key={index}><p className="mx-2"> {task}</p> <span className="deleteIcon mx-3 fz-1" onClick={()=>deleteTask(index)}>x</span></div>)}
            <p className="">{tasks.length}item left</p>
            </div>        
        </div>
        
    )
}



export default Todo