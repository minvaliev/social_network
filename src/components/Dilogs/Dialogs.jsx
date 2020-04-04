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

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
               <DialogItem name="DIMAS" id="1"/>
               <DialogItem name="Sergey" id="2"/>
               <DialogItem name="Mihail" id="3"/>
               <DialogItem name="Valera" id="4"/>
               <DialogItem name="Roman" id="5"/>
            </div>
            <div className={classes.messages}>
                <Message message='Hi'/>
                <Message message='How is you'/>
                <Message message='Yo'/>
                <Message message='Yessss'/>
            </div>
        </div>
    );
}

export default Dialogs;