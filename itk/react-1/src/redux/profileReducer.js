const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  posts: [
    { id: "1", message: "Hi, how are you?", likesCount: 10 },
    { id: "2", message: "It's my first post", likesCount: 12 },
  ],
  newPostText: "",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 5,
      };
      return{...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };
    
    case UPDATE_NEW_POST_TEXT: 
      return {
        ...state,
        newPostText: action.newText
      };
    
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;