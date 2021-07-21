import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post"; 
import {Field, reduxForm} from 'redux-form'
import {required, maxLength} from '../../../utils/validators/validators'
import { Textarea } from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLength(10);

const MyPosts = (props) => {

  const postsElements = props.posts.map(p => (<Post message= {p.message} likesCount = {p.likesCount}/>));

  const onSubmit=(values)=>{
    props.addPost(values.newPostText);
}

  return (
      <div className = {s.postWrapper}>
        <h3>My posts</h3>
        <div>New post</div>
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
    <Field component = {Textarea} name = {'newPostText'} placeholder = 'Enter your message' 
           validate = {[required, maxLength10]} ></Field>
    <button >add message</button>
  </form>
  )
}

const AddPostReduxForm = reduxForm({form: 'AddPostForm'})(AddPostForm)

export default MyPosts;
