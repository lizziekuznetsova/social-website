// import {styled} from 'styled-components';
import { useState } from 'react';
import UserBtn from '../user/UserBtn';
import Modal from '../modal/Modal'



// const HelpServ=styled.div `
// background: #464f79;
// width: 200%;
// height: 70vh;
// border-radius: 10px;
// text-align: center;
// padding-top: 50px;
// `


let HelpService=()=>{
    const [nameUser, setNameUser] = useState('');
    const [errorInput, setErrorInput] = useState(false)
    const [modal, setModal] = useState(false)
    
    let changeInputName=(event)=>{
        // console.log(event)
        setNameUser(event.target.value)
        setErrorInput(event.target.value.trim().length==0)
    }

    let reportForm=()=>{
        console.log('click', errorInput)
    }

    let getInformation=()=>{
        setModal(true)
        console.log('info dump')
    }
    let getCloseWindow=()=>{
        setModal(false)
    }
// nameUser.trim().length ? null 
    
    return(
        <div className='helpServ'>
        <h2>Help</h2>
        <input style={{
            border: errorInput ? '1px solid red' : null
        }} 
        value={nameUser} onChange={changeInputName} type='text' placeholder='Your name'/>
        <p>{nameUser}</p>
        <UserBtn disabled={errorInput} text={'report issue'} handleClick={reportForm}></UserBtn>
        <Modal open={modal}> 
            <h2>Important Information</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui soluta a beatae corporis omnis officia molestias deleniti? Odio, a deserunt enim labore reprehenderit pariatur laborum aspernatur quae? Eos, natus.</p>
            <UserBtn text={"close"} handleClick={getCloseWindow}></UserBtn>
        </Modal>
       <UserBtn  text={"click for information"} handleClick={getInformation}></UserBtn>
        </div>
    )
}

export default HelpService
