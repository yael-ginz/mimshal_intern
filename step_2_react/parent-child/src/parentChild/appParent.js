import React,{useState} from 'react'
import Message from './message'

function AppParent() {
    let [show, setshow]=useState(true);

    const hideMessage= ()=>{
        setshow(false)
    }
  return (
    <div>
        <h2>Parent comp</h2>
 {show && <Message hideMessage1={hideMessage} txt="work from parent"/> }
    </div>
   
  )
}

export default AppParent