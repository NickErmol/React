import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {sendMessage} from "../../redux/dialogsReducer"
import { getDialogsPage, getDialogsPageNewMessageBody } from "../../redux/dialogsSelectors";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage : getDialogsPage(state),
    newMessageBody : getDialogsPageNewMessageBody(state)
  };
};

export default compose(
  connect(mapStateToProps, {sendMessage}),
  withAuthRedirect
)(Dialogs);

