import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Messages from "./components/Messages/Messages.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import state from "./redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <Sidebar state={state.sidebar}/>
                <div className='appWrapperContent'>
                    <Route path='/profile'
                           render={() => <Profile
                               state={state.profile}/>}/>
                    <Route path='/messages'
                           render={() => <Messages
                               state={state.messages}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
