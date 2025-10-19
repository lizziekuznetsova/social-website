import Post from './post/Post'

let messages=["new account", "got new shoes", "movie coming out soon", "buy tickets"]
export default function Posts(){
    return(
         <div className='posts'>
                <input className='type' type="text" />
                <button className='btn'>Add Post</button>
                
                <Post message={messages[0]}/>
                <Post message={messages[1]}/>
                <Post message={messages[2]}/>
                <Post message={messages[3]}/>
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