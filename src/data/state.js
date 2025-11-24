// import ava1 from 'components/nav-bar/img/andrew.png'
import ava2 from '../components/nav-bar/img/tommy.jpg'
import ava3 from '../components/nav-bar/img/katie.jpg'
import {renderTree} from '../renderTree'



let state={
    postsData:[
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
    ],
    posting: "cold winter",

    dialogueNames:[
         {
        name: "Anya Taylor-Joy",
        id: "1",
        like: 10
    },
    {
        name: "Florence Pugh",
        id: "2",
        like: 15
    },
    {
        name: "Olivia Cooke",
        id: "3",
        like: 22
    },
    {
         name: "Andrew Garfield",
        id: "4",
        like: 9
    },
    {
         name: "Timmy Jones",
        id: "5",
        like: 9
    },
    {
         name: "Katie Vermont",
        id: "6",
        like: 9
    }
    ],

    dialogueMessages:[
    {
        message: "Hi, how are you?",
        id: "0"
    },
     {
        message: " Are you free tomorrow?",
        id: "1"
    },
       {
        message: "Btw I borrowed your white sweater",
        id: "2"
    },
       {
        message: "yooooooo",
        id: "3"
    }
    ],

    friends: [
        {
        avatar: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRhPqjn8FSYXZIt1N1drfSTRnqXQw1tU1c0LzlGi_IW0xjX8aUQir2PwlbAJa2CB4_wfVkDEXFr-bIa959Cej1EIZl8h4iSksRw7oClSKV9Ae8FBfLKgckRPHstJBWR9oJeLz8sMR4Zorz9&s=19',
        name: 'Andrew Garfield',
       
        },
        {
        avatar: ava2,
        name: 'Timmy Jones'
        },
        {
        avatar: ava3,
        name: 'Katie Vermont'
        },
        {
        avatar: 'https://wallpapers.com/images/hd/actress-pictures-o83jy9l56xbeo8l0.jpg',
        name: 'Alexandra Daddario'
        },
        {
        avatar: ava3,
        name: 'Katie Vermont'
        },
        {
        avatar: ava3,
        name: 'Katie Vermont'
        },
    ]
}

console.log(state.postsData)

export let addPost=(postText)=>{
    let newPost={
         text: postText,
        id: 7,
        likes: 3764,
    }
    state.postsData.unshift(newPost)
    // console.log(state.postsData)
    // console.log(state)
    state.posting="";
    renderTree(state);
    
}
    console.log(state.dialogueMessages)
export let addMessage=(messageText)=>{
    let newMessage={
         message: messageText,
        id: 13,
    }
    state.dialogueMessages.push(newMessage)
    console.log(state.dialogueMessages)
    renderTree(state);
}

export function onPostChange(text){
    state.posting=text;
    renderTree(state);
}

console.log(state.posting)




// let mass=[1, "2", 3, 4, {
//     id:6,
//     text:"text"
// }]
// let text={
//      id:9,
//     text:"hello"
// }
// mass.push(text)
// console.log(mass)

export default state