import logo from './logo.png'
import { useState } from 'react'

export default function Header(){

    const [time, setTime]=useState(new Date())
    setInterval(()=>setTime(new Date), 1000)
    return(
        <div className="header">
            <img className='logo' src={logo} alt="" />
            <p style={{textShadow: "5px 5px 5px black"}} className='time'>{time.toLocaleTimeString()}</p>
        </div>
    )
}
