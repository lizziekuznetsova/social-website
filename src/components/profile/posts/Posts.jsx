import { onPostChange } from '../../../data/state'
import Post from './post/Post'
import React from 'react'
import { addPostAC, onPostChangeAC } from '../../../data/state'




// let messages=["new account", "got new shoes", "movie coming out soon", "buy tickets"]

// let PostsData= [
//     {
//         text: "new account",
//         id: 0,
//         likes: 3764
//     },
//     {
//         text: "got new shoes",
//         id: 1,
//         likes: 263
//     },
//       {
//         text: "movie coming out soon",
//         id: 2,
//         likes: 7432
//     },
//     {
//         text: "buy tickets",
//         id: 3,
//         likes: 8594
//     }
// ]
let postText=React.createRef()

// console.log(postText)

// let addPostAC=()=>{
//     return{type: 'ADD_POST'}
// }


export default function Posts(props){

 function addPost(){
    console.log(postText.current.value)
    props.dispatch(addPostAC())
    console.log("working dispatch")
    // postText.current.value=''
//    props.addPost(postText.current.value)
}

function onPostChange(){
    // props.onPostChange(postText.current.value)
    let textPost=postText.current.value
    // console.log(text)
    // let action= 
    props.dispatch(onPostChangeAC(textPost))

}
    return(
         <div className='posts'>

                <input onChange={onPostChange} value={props.posting} ref={postText}  className='type' type="text" />
                <button onClick={addPost} className='btn'>Add Post</button>

                {props.postsData.map((e) => <Post addPost={props.addPost} message={e.text} likes={e.likes} />)}
                
                {/* <Post message={messages[0]}/>
                <Post message={messages[1]}/>
                <Post message={messages[2]}/>
                <Post message={messages[3]}/> */}
            </div>
    )
}

