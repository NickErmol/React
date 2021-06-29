const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: 8,
                message: state.newMessageBody
                };
                state.messages.push(newMessage);
                state.newMessageBody = "";
                return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageBody;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
  
export const updateNewMessageBodyCreator = (message) => ({
      type: UPDATE_NEW_MESSAGE_BODY,
      newMessageBody: message
  });

export default dialogsReducer;