import React from "react";
import {NavLink} from "react-router-dom";
import ava1 from './img/andrew.png'
import ava2 from './img/tommy.jpg'
import ava3 from './img/katie.jpg'

// let friends=[
//     {
//         avatar: ava1,
//         name: 'Andrew Garfield',

//     },
//     {
//         avatar: ava2,
//         name: 'Timmy Jones'
//     },
//     {
//         avatar: ava3,
//         name: 'Katie Vermont'
//     },
//     {
//         avatar: ava3,
//         name: 'Katie Vermont'
//     },
//     {
//         avatar: ava3,
//         name: 'Katie Vermont'
//     },
//     {
//         avatar: ava3,
//         name: 'Katie Vermont'
//     },

// ]

export default function Nav(props){
    return(
        <div className="nav">
            <NavLink className="nav_link" to="profile">Profile</NavLink>
            <NavLink className="nav_link" to="/messages">Messages</NavLink>
            <NavLink className="nav_link" to="/users">Users</NavLink>
            <NavLink className="nav_link" to="/dialogues">Dialogues</NavLink>
            <div className="friends">
                <p className="nav_link friends_title">Friends</p>
                <div className="friendsNames">
                
                        {props.friends.map((e)=>{
                            return(
                                 <div className="friendsItem">
                            <NavLink className="nav_link">
                                <img src={e.avatar} alt="" />
                                <p>{e.name}</p>
                            </NavLink>
                             </div> 
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )
}