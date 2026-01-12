import React from 'react'

export default function UserBtn({text, handleClick, isActive}){
    // const handleClick=()=>{
    //     console.log("click on the button")
    // }
    
    return(
        <div>
             <button className={isActive ? 'btn_user active' : 'btn_user'} onClick={handleClick}>{text}</button>
        </div>
    )
   
}