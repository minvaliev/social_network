import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/1' + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
               <DialogItem name="DIMAS" id="77"/>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>Sergey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Mihail</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>Valera</NavLink>
                </div>
                <div className={classes.dialog}>
                     <NavLink to='/dialogs/5'>Dima</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How is you</div>
                <div className={classes.message}>Yo</div>
                <div className={classes.message}>Yessss</div>
            </div>
        </div>
    );
}

export default Dialogs;