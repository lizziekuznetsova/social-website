import React from 'react';
import {NavLink} from "react-router-dom";

 function DialogueName(props){
    return(
        <div>

                <p> 
                <NavLink className="nombre" to={`/dialogues/${props.id}`}>{props.name}</NavLink>
                </p>
                {/* <p>
                    <NavLink className="nombre" to="/dialogues/2">Florence Pugh</NavLink>
                </p>
                <p>
                    <NavLink className="nombre" to="/dialogues/3">Olivia Cooke</NavLink>
                </p> */}
            </div>
    )
}

function Test(){
    return <h2>test</h2>
}

export {DialogueName, Test}