import React from 'react';
import {NavLink} from "react-router-dom";

export default function DialogueName(props){
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

