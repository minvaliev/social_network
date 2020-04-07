import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 1, name: 'DIMAS'},
    {id: 2, name: 'Sergey'},
    {id: 3, name: 'Darya'},
    {id: 4, name: 'Valera'},
    {id: 5, name: 'Roman'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is you'},
    {id: 3, message: 'Miss'},
    {id: 4, message: 'Valera'},
    {id: 5, message: 'Yessss'},
]

let posts = [
    {id: 1, message: 'Hi, my friend', likesCount: 5},
    {id: 2, message: 'Good By, my girlfriend', likesCount: 27},
    {id: 3, message: 'Good By, my girlfriend', likesCount: 27},
    {id: 4, message: 'GGFFGDG', likesCount: 27},
    {id: 5, message: 'DGGDRRR', likesCount: 27},
    {id: 6, message: 'dgcdfd', likesCount: 27},
]

ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
