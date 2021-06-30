import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import StoreContext from "../../../storeContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const state = store.getState().profilePage;

          const addPost = () => {
            const action = addPostActionCreator();
            store.dispatch(action);
          };

          const onPostChange = (text) => {
            const action = updateNewPostTextActionCreator(text);
            store.dispatch(action);
          };

          return <MyPosts
          updateNewPostText={onPostChange}
          addPost={addPost}
          posts={state.posts}
          newPostText={state.newPostText}
        />
        }
      }
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
