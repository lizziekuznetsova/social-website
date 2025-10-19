import React from "react";
import {NavLink} from "react-router-dom";

export default function NotFoundPage(){
    return(
        <div className="profile">
            <h2>This page has not been found. Click the link below to return home.</h2>
            <NavLink  className="nav_link" to="/">click here to go home</NavLink>
        </div>
    )
}