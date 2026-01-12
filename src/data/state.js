// import ava1 from 'components/nav-bar/img/andrew.png'
import ava2 from '../components/nav-bar/img/tommy.jpg'
import ava3 from '../components/nav-bar/img/katie.jpg'
// import {renderTree} from '../renderTree'

const ADD__POST='ADD_POST';
const POST_CHANGE='POST-CHANGE';

let store={
    _state:{
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

    dialoguesArray: {
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
    talking: "start a conversation"
},



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
    ],

    userPage: {
        friends: [
            'Katie Vermont', 'Alexandra Daddario', 'Andrew Garfield'
        ],
        collegues: [
            'Timmy Jones', 'Steve Harrington'
        ],
        family: [
        'Mum', 'Dad', 'sisters'
        ]
    }
},

// console.log(state.postsData)

// addPost(postText){
//     let newPost={
//          text: postText,
//         id: 7,
//         likes: 3764,
//     }
//     this._state.postsData.unshift(newPost)
//     // console.log(state.postsData)
//     // console.log(state)
//     this._state.posting="";
//     this.renderTree(this._state);
    
// },
    // console.log(state.dialoguesArray.dialogueMessages)
// addMessage(messageText){
//     let newMessage={
//          message: messageText,
//         id: 13,
//     }
//    this._state.dialoguesArray.dialogueMessages.push(newMessage)
//     // console.log(state.dialoguesArray.dialogueMessages)
//     this.renderTree(this._state);
// },

// onPostChange(text){
//     this._state.posting=text;
//     this.renderTree(this._state);
// },

// console.log(state.posting)

subscribe(observer){
    this.renderTree=observer;
},
getStart(){
    return this._state
},
dispatch(action){
if(action.type===ADD__POST){
    let newPost={
         text: this._state.posting,
        id: 7,
        likes: 3764,
    }
    this._state.postsData.unshift(newPost)
    console.log(newPost, this._state.postsData)
    // this._state.posting="";
    this.renderTree(this._state);
    

}else if(action.type==POST_CHANGE){
    this._state.posting=action.text;
    this.renderTree(this._state);
}else if(action.type=="ADD_MESSAGE"){
     let newMessage={
         message: this._state.dialoguesArray.talking,
        id: 13,
    }
   this._state.dialoguesArray.dialogueMessages.push(newMessage)
    // console.log(state.dialoguesArray.dialogueMessages)
    this.renderTree(this._state);
}else if(action.type=="DIALOGUE_CHANGE"){
    this._state.dialoguesArray.talking=action.text;
    this.renderTree(this._state);
}

}


}

export let addPostAC=()=>{
    return{type: ADD__POST}
}

export let onPostChangeAC=(text)=>{
    return{type: POST_CHANGE, text: text}
}

export default store

