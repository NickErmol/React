import React from "react";
import { connect } from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage : state.dialogsPage,
    newMessageBody : state.dialogsPage.newMessageBody,
    isAuth: state.auth.isAuth
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (text) => {
      dispatch(updateNewMessageBodyCreator(text));
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
