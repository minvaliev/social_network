import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Dialogs from "./components/Dilogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div class='app-wrapper-content'>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/profile" component={Profile}/>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
