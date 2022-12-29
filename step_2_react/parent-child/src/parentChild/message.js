import React from 'react'

function Message(proprs) {
  return (
    <div className='w-50 p-3 h3 bg-warning'>
        message:{proprs.txt}
        <button onClick={()=>{
            proprs.hideMessage1()
        }} className='float-end'>x</button>
        </div>
  )
}

export default Message