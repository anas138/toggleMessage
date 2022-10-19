import React,{useState} from 'react'
function ToggleMessage() {
    const [togggle,setToggle] = useState(false)
    const toggleMessage=()=>{
        console.log("anas")
        setToggle(!togggle)
    }
  return (
    <div className="message-container"> 
        <a href="#" onClick={toggleMessage}>Want to buy a new car?</a>
        {togggle && <p>Call +11 22 33 44 now!</p>}
        
    </div>
  )
}

export default ToggleMessage