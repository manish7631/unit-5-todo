import {useState} from "react"

export const Todoinput = ({getData}) => {
    const [Text, SetText] = useState("")
    return (
        <div>
             <input onChange={(e) => {
                 SetText(e.target.value)
             }} type="text" placeholder="Enter Todo" />
        <button onClick={() => {
            getData(Text)
        }}>Add Todo</button>
       
        </div>
    )
}