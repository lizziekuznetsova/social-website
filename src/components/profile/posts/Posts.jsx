import Post from './post/Post'

// let messages=["new account", "got new shoes", "movie coming out soon", "buy tickets"]

let posts= [
    {
        text: "new account",
        id: 0,
        likes: 3764
    },
    {
        text: "got new shoes",
        id: 1,
        likes: 263
    },
      {
        text: "movie coming out soon",
        id: 2,
        likes: 7432
    },
    {
        text: "buy tickets",
        id: 3,
        likes: 8594
    }
]


export default function Posts(){
    return(
         <div className='posts'>
                <input className='type' type="text" />
                <button className='btn'>Add Post</button>

                {posts.map((e) => <Post message={e.text} likes={e.likes} />)}
                
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