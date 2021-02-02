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
            <Sidebar state={props.store.getState().sidebar}/>
            <div className='appWrapperContent'>
                <Route path='/profile'
                       render={() => <Profile store={props.store}/>}/>
                <Route path='/messages'
                       render={() => <Messages store={props.store}/>}/>
            </div>
        </div>

    );
}

export default App;
