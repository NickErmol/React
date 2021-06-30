import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer"
import StoreContext from "../../storeContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        (store) =>{
          const state = store.getState().dialogsPage;

          const sendMessage = () => {
            const action = sendMessageCreator();
            store.dispatch(action);
        }
        
        const messageBodyChange = (text) => {
            const action = updateNewMessageBodyCreator(text);
            store.dispatch(action);
        }
    
          return <Dialogs sendMessage = {sendMessage} messageBodyChange = {messageBodyChange} dialogsPage = {state} />
        }
      }
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
