import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Messages from "./components/Messages/Messages.jsx";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className='appWrapper'>
            <Header/>
            <Sidebar state={props.state.sidebar}/>
            <div className='appWrapperContent'>
                <Route path='/profile'
                       render={() => <Profile
                           state={props.state.profile}
                           dispatch={props.dispatch}
                       />}/>
                <Route path='/messages'
                       render={() => <Messages
                           state={props.state.messages}
                           dispatch={props.dispatch}
                       />}/>
            </div>
        </div>

    );
}

export default App;
