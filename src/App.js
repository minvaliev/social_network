import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Dialogs from "./components/Dilogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div class='app-wrapper-content'>
                    <Route path="/dialogs" render={ () => <Dialogs
                        state={props.state.dialogsPage} />}/>
                    <Route path="/profile" render={ () => <Profile
                        state={props.state.profilePage}/>}/>
                </div>
            </div>
    )
}

export default App;
