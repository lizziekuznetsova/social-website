

import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state from './data/state';
import { addPost, addMessage } from './data/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderTree=(state)=>{
    root.render(
    <React.StrictMode>
        <App 
        state={state}
        addPost={addPost}
        addMessage={addMessage}
        />
    </React.StrictMode>
    )
}

export {renderTree}