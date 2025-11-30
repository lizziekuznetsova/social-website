import React from 'react'
import './Dialogue.css'
import DialogueName from './dialogueName/DialogueName'
import Messages from './messages/Messages'


// let dialogueNames=[
//     {
//         name: "Anya Taylor-Joy",
//         id: "1",
//         like: 10
//     },
//     {
//         name: "Florence Pugh",
//         id: "2",
//         like: 15
//     },
//     {
//         name: "Olivia Cooke",
//         id: "3",
//         like: 22
//     },
//     {
//          name: "Andrew Garfield",
//         id: "4",
//         like: 9
//     },
//     {
//          name: "Timmy Jones",
//         id: "5",
//         like: 9
//     },
//     {
//          name: "Katie Vermont",
//         id: "6",
//         like: 9
//     }
    
// ]

// let dialogueMessages=[
//     {
//         message: "Hi, how are you?",
//         id: "0"
//     },
//      {
//         message: " Are you free tomorrow?",
//         id: "1"
//     },
//        {
//         message: "Btw I borrowed your white sweater",
//         id: "2"
//     },
//        {
//         message: "yooooooo",
//         id: "3"
//     }
// ]
// dialogueNames[2].name="lucy"
// console.log(dialogueNames[2].name)

let messageText=React.createRef()

export default function Dialogues(props){

    function addMessage(){
        props.addMessage(messageText.current.value)
    }

    return(
        <div className="dialogues profile">
            <div className="names">
                {props.dialoguesArray.dialogueNames.map((item) => <DialogueName id={item.id} name={item.name}/>) }
                {/* <DialogueName id={dialogueNames[0].id} name={dialogueNames[0].name}/>
                <DialogueName id={dialogueNames[1].id} name={dialogueNames[1].name}/>
                <DialogueName id={dialogueNames[2].id} name={dialogueNames[2].name}/>
                <DialogueName id={dialogueNames[3].id} name={dialogueNames[3].name}/> */}
            </div>
                <div>
                    {props.dialoguesArray.dialogueMessages.map((element) => <Messages messages={element.message}/>)}
                {/* <Messages messages={dialogueMessages[0].message}/>
                <Messages messages={dialogueMessages[1].message}/>
                <Messages messages={dialogueMessages[2].message}/>
                <Messages messages={dialogueMessages[3].message}/> */}
                {/* <Messages messages={"Btw I borrowed your white sweater"}/> */}
                </div>

             <div className="send_message">
                    <input ref={messageText} type="text" />
                    <button onClick={addMessage}>send</button>
            </div>
        </div>
    )
}