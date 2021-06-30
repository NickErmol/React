import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Dialogs = (props) => {

    const state = props.dialogsPage;
    const newMessageBody = props.newMessageBody;

    const dialogElements = state.dialogs.map(d => (<DialogItem id = {d.id} name = {d.name} userAvatar = {d.userAvatar}/>));
    const messagesElements = state.messages.map(m => (<Message message = {m.message}/>));

    const onSendMessage = () => {
        props.sendMessage();
    }
    
    const onMessageBodyChange = (e) => {
        const text = e.target.value;
        props.messageBodyChange(text);
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
            <button onClick ={onSendMessage}>add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
