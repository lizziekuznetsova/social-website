import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav-bar/Nav';
import Profile from './components/profile/Profile';
import {NavLink, BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFoundPage from './components/not-found/NotFoundPage';
import Dialogues from './components/dialogues/Dialogues';
import { Name1, Name2, Name3} from './components/dialogues/Name';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Nav/>
        <Routes>
          <Route path='/' element={Profile}></Route>
           <Route path='/profile' element={<Profile postsData={props.state.postsData}/>}></Route>
          <Route path='/dialogues' element={<Dialogues dialogueNames={props.state.dialogueNames} dialogueMessages={props.state.dialogueMessages}/>}></Route>
          <Route path='/dialogues/1' element={<Name1/>}/>
          <Route path='/dialogues/2' element={<Name2/>}/>
          <Route path='/dialogues/3' element={<Name3/>}/>
           <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
