const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "Hi, how are you?", likesCount: 10 },
        { id: "2", message: "It's my first post", likesCount: 12 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      messages: [
        { id: "1", message: "Hi" },
        { id: "2", message: "Hello" },
        { id: "3", message: "How are you?" },
        { id: "4", message: "Good" },
        { id: "5", message: "Thanks" },
        { id: "6", message: "Good for you" },
        { id: "7", message: "Yo" },
      ],
      dialogs: [
        {
          id: "1",
          name: "Nick",
          userAvatar:
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
        },
        {
          id: "2",
          name: "Kirill",
          userAvatar:
            "https://banner2.cleanpng.com/20180625/req/kisspng-computer-icons-avatar-business-computer-software-user-avatar-5b3097fcae25c3.3909949015299112927133.jpg",
        },
        {
          id: "3",
          name: "Vlad",
          userAvatar:
            "https://banner2.cleanpng.com/20180529/eot/kisspng-computer-icons-clip-art-profile-avatar-5b0de499bbdc67.8725542215276371457695.jpg",
        },
        {
          id: "4",
          name: "Sveta",
          userAvatar:
            "https://img.favpng.com/8/13/6/avatar-computer-icons-png-favpng-zapkeKu3xzjy6HwSaFu87UfGQ.jpg",
        },
        {
          id: "5",
          name: "Alina",
          userAvatar:
            "https://banner2.cleanpng.com/20180329/bhe/kisspng-computer-icons-avatar-user-profile-human-5abcd90dcf1548.0400521415223257738482.jpg",
        },
        {
          id: "6",
          name: "Pasha",
          userAvatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNWA656CRe97bqFdSiLSLH-gp6tfGFKMURg&usqp=CAU",
        },
        {
          id: "7",
          name: "Sasha",
          userAvatar:
            "https://w7.pngwing.com/pngs/238/446/png-transparent-computer-icons-user-profile-avatar-old-man-face-heroes-head.png",
        },
      ],
      newMessageBody: ""
    },
  },
  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },


  dispatch(action) {
      if (action.type === ADD_POST){
        const newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 5,
          };
          this._state.profilePage.posts.push(newPost);
          this._state.profilePage.newPostText = "";
          this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
        this._state.dialogsPage.newMessageBody = action.newMessageBody;
        this._callSubscriber(this._state);
      } else if (action.type === SEND_MESSAGE){
        const newMessage = {
            id: 8,
            message: this._state.dialogsPage.newMessageBody
          };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageBody = "";
        this._callSubscriber(this._state);
      }
  },
};


export const addPostActionCreator = () => ({type: ADD_POST});
  
export const updateNewPostTextActionCreator = (text) => ({
      type: UPDATE_NEW_POST_TEXT,
      newText: text
  });

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
  
export const updateNewMessageBodyCreator = (message) => ({
      type: UPDATE_NEW_MESSAGE_BODY,
      newMessageBody: message
  });

window.store = store;

export default store;
