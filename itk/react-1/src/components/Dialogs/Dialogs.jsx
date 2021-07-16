import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import {Field, reduxForm} from 'redux-form'

const Dialogs = (props) => {

    const state = props.dialogsPage;
    const newMessageBody = props.newMessageBody;
    
    const dialogElements = state.dialogs.map(d => (<DialogItem id = {d.id} key = {d.id} name = {d.name} userAvatar = {d.userAvatar}/>));
    const messagesElements = state.messages.map(m => (<Message message = {m.message} key ={m.id}/>));

    const addNewMessage=(values)=>{
      props.sendMessage(values.newMessageBody);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
          <div>{messagesElements}</div>
        <ADDMessageReduxForm onSubmit={addNewMessage}/>
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit} className={s.addMessage}>
    <Field component = {'textarea'} name = {'newMessageBody'} placeholder = 'Enter your message' ></Field>
    <button >add message</button>
  </form>
  )
}

const ADDMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
