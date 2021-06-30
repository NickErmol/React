import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post"; 

const MyPosts = (props) => {

  const postsElements = props.posts.map(p => (<Post message= {p.message} likesCount = {p.likesCount}/>));

  const onAddPost = () => {
    props.addPost();
  }

  const onPostChange = (e) => {
    const text = e.target.value;
    props.updateNewPostText(text);
  }

  return (
      <div className = {s.postWrapper}>
        <h3>My posts</h3>
        <div>New post</div>
        <div>
          <textarea onChange = {onPostChange} value = {props.newPostText} placeholder = 'Enter your message' />  
        </div>
        <div>
          <button onClick = {onAddPost}>add post</button>
        </div>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
  );
};

export default MyPosts;
