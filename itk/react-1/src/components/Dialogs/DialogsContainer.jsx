import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    const state = props.store.getState().dialogsPage;

    const sendMessage = () => {
        const action = sendMessageCreator();
        props.store.dispatch(action);
    }
    
    const messageBodyChange = (text) => {
        const action = updateNewMessageBodyCreator(text);
        props.store.dispatch(action);
    }

  return (
    <Dialogs sendMessage = {sendMessage} messageBodyChange = {messageBodyChange} dialogsPage = {state} />
  );
};

export default DialogsContainer;
