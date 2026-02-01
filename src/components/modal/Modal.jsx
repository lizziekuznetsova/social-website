import './Modal.css'
import {createPortal} from 'react-dom'
import { useRef, useEffect } from 'react'


export default function Modal({children, open}){


    const dialog= useRef()

    useEffect(()=>{
        if(open){
            dialog.current.showModal()
        }else{
            dialog.current.close()
        }
    },[open])
    
    console.log(dialog)

    return createPortal(
        <dialog ref={dialog} className='modal'>{children}</dialog>,
        document.getElementById('modal')
    )
}
