import './Dialogue.css'
import {DialogueName, Test} from './dialogueName/DialogueName'
import Messages from './messages/Messages'


export default function Dialogues(){
    return(
        <div className="dialogues profile">
            <div className="names">
                <DialogueName id={"1"} name={"Anya Taylor-Joy"}/>
                <DialogueName id={"2"} name={"Florence Pugh"}/>
                <DialogueName id={"3"} name={"Olivia Cooke"}/>
                <DialogueName id={"4"} name={"Andrew Garfield"}/>
            </div>
                <div>
                <Messages messages={"Hi, how are you?"}/>
                <Messages messages={" Are you free tomorrow?"}/>
                <Messages messages={"Btw I borrowed your white sweater"}/>
                <Messages messages={"yooooooo"}/>
                <Messages messages={"Btw I borrowed your white sweater"}/>
                </div>

             <div className="send_message">
                    <input type="text" />
                    <button>send</button>
                </div>
        </div>
    )
}