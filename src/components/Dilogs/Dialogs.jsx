import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
}

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

let dialogsElements = dialogs.map( m => <DialogItem name={m.name} id = {m.id}/>);
let messagesElements = messages.map( d => <Message message={d.message}/>)

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;