import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state"

const Dialogs = (props) => {

    const state = props.store.getState().dialogsPage;
    const newMessageBody = props.newMessageBody;

    const dialogElements = state.dialogs.map(d => (<DialogItem id = {d.id} name = {d.name} userAvatar = {d.userAvatar}/>));
    const messagesElements = state.messages.map(m => (<Message message = {m.message}/>));

    const sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }
    
    const onMessageBodyChange = (e) => {
        const text = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(text));
    }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
          <div>{messagesElements}</div>
          <div className={s.addMessage}>
            <textarea value = {newMessageBody} onChange = {onMessageBodyChange} placeholder = 'Enter your message' ></textarea>
            <button onClick ={sendMessage}>add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
