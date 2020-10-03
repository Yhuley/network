import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Messages from "./components/Messages/Messages.jsx";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <Navbar/>
                <div className='appWrapperContent'>
                    <Route path='/profile' render={ () => <Profile postsData={props.postsData}/>}/>
                    <Route path='/messages' render={ () => <Messages messageData={props.messageData} dialogsListData={props.dialogsListData}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
