import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Dialogs = (props) => {

    const dialogElements = props.state.dialogs.map(d => (<DialogItem id = {d.id} name = {d.name} userAvatar = {d.userAvatar}/>));
    const messagesElements = props.state.messages.map(m => (<Message message = {m.message}/>));

    const addMessageElement = React.createRef();
    const addMessage = () => {
        alert(addMessageElement.current.value);
    }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
          {messagesElements}
      </div>
      <div className={s.addMessgae}>
            <textarea ref = {addMessageElement}></textarea>
            <button onClick ={addMessage}>add message</button>
        </div>
    </div>
  );
};

export default Dialogs;
