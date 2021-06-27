import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

  const postsElements = props.posts.map(p => (<Post message= {p.message} likesCount = {p.likesCount}/>));

  const newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
      <div className = {s.postWrapper}>
        <h3>My posts</h3>
        <div>New post</div>
        <div>
          <textarea onChange = {onPostChange} ref = {newPostElement} value = {props.newPostText}/>  
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
