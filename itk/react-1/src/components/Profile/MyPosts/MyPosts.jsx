import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post"; 
import {Field, reduxForm} from 'redux-form'

const MyPosts = (props) => {

  const postsElements = props.posts.map(p => (<Post message= {p.message} likesCount = {p.likesCount}/>));

  const onSubmit=(values)=>{
    props.addPost(values.newPostText);
}

  return (
      <div className = {s.postWrapper}>
        <h3>My posts</h3>
        <div>New post</div>
        {/* <div>
          <textarea onChange = {onPostChange} value = {props.newPostText} placeholder = 'Enter your message' />  
        </div>
        <div>
          <button onClick = {onAddPost}>add post</button>
        </div> */}
          <AddPostReduxForm onSubmit={onSubmit}/>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
  );
};

const AddPostForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit} className={s.addMessage}>
    <Field component = {'textarea'} name = {'newPostText'} placeholder = 'Enter your message' ></Field>
    <button >add message</button>
  </form>
  )
}

const AddPostReduxForm = reduxForm({form: 'AddPostForm'})(AddPostForm)

export default MyPosts;
