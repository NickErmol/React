import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage : state.dialogsPage,
    newMessageBody : state.dialogsPage.newMessageBody
  };
};

export default compose(
  connect(mapStateToProps, {sendMessage, updateNewMessageBody}),
  withAuthRedirect
)(Dialogs);

