import Post from './post/Post'
import React from 'react'



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


export default function Posts(props){

 function addPost(){
    console.log(postText.current.value)
   props.addPost(postText.current.value)
}

    return(
         <div className='posts'>
                <input className='type' type="text" ref={postText} />
                <button onClick={addPost} className='btn'>Add Post</button>

                {props.postsData.map((e) => <Post addPost={props.addPost} message={e.text} likes={e.likes} />)}
                
                {/* <Post message={messages[0]}/>
                <Post message={messages[1]}/>
                <Post message={messages[2]}/>
                <Post message={messages[3]}/> */}
            </div>
    )
}

// function Name(name){
//     console.log("hello "+name);
// }

// Name("Liza");

// let dog={
//     name: "Lucy",
//     color: "apricot",
//     age: 8
// }
// console.log("my dogs name is "+dog.name);

// dog.age=1
// console.log(dog.age)