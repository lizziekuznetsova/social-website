import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './data/state';



// let postsData= [
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

// let dialogueNames=[
//     {
//         name: "Anya Taylor-Joy",
//         id: "1",
//         like: 10
//     },
//     {
//         name: "Florence Pugh",
//         id: "2",
//         like: 15
//     },
//     {
//         name: "Olivia Cooke",
//         id: "3",
//         like: 22
//     },
//     {
//          name: "Andrew Garfield",
//         id: "4",
//         like: 9
//     },
//     {
//          name: "Timmy Jones",
//         id: "5",
//         like: 9
//     },
//     {
//          name: "Katie Vermont",
//         id: "6",
//         like: 9
//     }
    
// ]

// let dialogueMessages=[
//     {
//         message: "Hi, how are you?",
//         id: "0"
//     },
//      {
//         message: " Are you free tomorrow?",
//         id: "1"
//     },
//        {
//         message: "Btw I borrowed your white sweater",
//         id: "2"
//     },
//        {
//         message: "yooooooo",
//         id: "3"
//     }
// ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
    // postsData={postsData}
    // dialogueNames={dialogueNames}
    // dialogueMessages={dialogueMessages}
    state={state}
    />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
