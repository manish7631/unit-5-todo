import { useState } from "react"
import { Todoinput } from "./Todoinput"
import { Todoitem } from "./Todoitem"

import {nanoid} from 'nanoid';

function Todo(){
    const [todolist, setTodolist] = useState([])

    const getData = (Todo) => {
          const payload = {
              title:Todo,
              status:false,
              id:nanoid(5)
          }
        setTodolist([...todolist, payload])
    }

    const handleStatus = (id) => {
        console.log(id)
        setTodolist([...todolist.map(e => e.id  === id ? {...e, status: !e.status}: e)])
    }
    return <div>
        <Todoinput getData = {getData}/>
        {todolist.map((e) => (
           <Todoitem handleStatus = {handleStatus} Todo={e}></Todoitem>  
        ))}
    </div>
}

export {Todo}