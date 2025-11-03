import React from "react";
import {NavLink} from "react-router-dom";

export default function Nav(){
    return(
        <div className="nav">
            <NavLink className="nav_link" to="profile">Profile</NavLink>
            <NavLink className="nav_link" to="/messages">Messages</NavLink>
            <NavLink className="nav_link" to="/users">Users</NavLink>
            <NavLink className="nav_link" to="/dialogues">Dialogues</NavLink>
        </div>
    )
}