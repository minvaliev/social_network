import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Dialogs from "./components/Dilogs/Dialogs";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div class='app-wrapper-content'>
                <Dialogs/>
            </div>
            {/*<Profile/ >*/}
        </div>);
}

export default App;
