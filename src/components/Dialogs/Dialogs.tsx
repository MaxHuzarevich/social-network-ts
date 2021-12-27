import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Button} from "@material-ui/core";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLength50, required} from "../../utils/validators/validators";
import {TextArea} from "../common/FormControl/FormControls";
import {AddMessageFormRedux} from "./AddMessageForm";


function Dialogs(props: DialogsPropsType) {
    const addNewMessage = (values:any) => {
        props.sendMessage(values.newMessageBody)
    }
    //значение переменной dialogsElements будет равно промапленному массиву объектов dialogs
    let dialogsElements =                     //key id элемента из которого мы получаем jsx элемент!!!
        props.dialogsPage.dialogs.map(dialogs => <DialogItem name={dialogs.name} key={dialogs.id} id={dialogs.id}/>)
    //значение переменной messageElements будет равно промапленному массиву объектов messages
    let messageElements =
        props.dialogsPage.messages.map(messages => <Message message={messages.message} key={messages.id}
                                                            id={messages.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div className={s.textField}>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;