import React from 'react'
import './User.css'
import UserBtn from './UserBtn'
import {useState} from 'react'

function Users(props){

    let [content, setContent]=useState(null)
    let [content2, setContent2]=useState(null)
    let [item, setItem]=useState(null)
    // console.log(btnArray)
    let arrayContent
    // let content="people"
    

    let handleClick=(type)=>{
        console.log(type)
        // setContent(type.join(', '))
        setContent(type)
        console.log(type)
        // content=type
        console.log(content)
    }

    let handleClick2=(type)=>{
        arrayContent=props.userPage
        setContent2(arrayContent[type])
        setItem(type)
        // console.log(arrayContent.content2)
        // console.log(arrayContent.friends)
        // console.log(type, content2)
        console.log(item)
    }
    console.log(item)
    return(
        <div className='users_container'>
            <UserBtn isActive={content==props.userPage.friends} text={"your friends"} handleClick={()=>handleClick(props.userPage.friends)}></UserBtn>

             <UserBtn isActive={item=='friends'} text={"your friends 2"} handleClick={()=>handleClick2('friends')}></UserBtn>

            <UserBtn isActive={content==props.userPage.collegues} text={"your collegues"} handleClick={()=>handleClick(props.userPage.collegues)}></UserBtn>
            <UserBtn isActive={content==props.userPage.family} text={"your family"} handleClick={()=>handleClick(props.userPage.family)}></UserBtn>
            {content? <> <h2 style={{marginTop: "50px"}} className='user_list'>List:</h2> <p>{content.join(', ')}</p></> :<span style={{marginTop: "50px"}}>Click the button</span>}
            {content2 && <p>{content2.join(', ')}</p>}
           
        </div>
    )
}

export default Users