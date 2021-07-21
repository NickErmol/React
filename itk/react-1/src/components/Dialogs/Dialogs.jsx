import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import ADDMessageForm from "./Message/AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    const state = props.dialogsPage;
    // const newMessageBody = props.newMessageBody;
    
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
        <ADDMessageForm onSubmit={addNewMessage}/>
      </div>
    </div>
  );
};

export default Dialogs;
