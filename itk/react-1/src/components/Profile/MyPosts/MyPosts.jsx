import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator} from '../../../redux/state'
import {updateNewPostTextActionCreator} from '../../../redux/state'

const MyPosts = (props) => {

  const postsElements = props.posts.map(p => (<Post message= {p.message} likesCount = {p.likesCount}/>));

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  const onPostChange = (e) => {
    const text = e.target.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
      <div className = {s.postWrapper}>
        <h3>My posts</h3>
        <div>New post</div>
        <div>
          <textarea onChange = {onPostChange} value = {props.newPostText}/>  
        </div>
        <div>
          <button onClick = {addPost}>add post</button>
        </div>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
  );
};

export default MyPosts;
