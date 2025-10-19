

export default function Messages(props){
    return(
         <div className="messages_container">
                <div className="messages">
                    <p className="message">{props.messages}</p>
                    {/* <p className="message">april 18th</p>
                    <p className="message">we are all wearing white, yes?</p> */}
                </div>
            </div>
    )
}