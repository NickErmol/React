import React from 'react';
import {Field, reduxForm} from 'redux-form';
import s from '../../Dialogs.module.css';
import { required, maxLength } from '../../../../utils/validators/validators';
import { Textarea } from '../../../Common/FormsControls/FormsControls';

const maxLength10 = maxLength(50);

const AddMessageForm = (props) => {
    return (
      <form onSubmit = {props.handleSubmit} className={s.addMessage}>
      <Field component = {Textarea} name = {'newMessageBody'} placeholder = 'Enter your message' 
      validate = {[required, maxLength10]} ></Field>
      <button >add message</button>
    </form>
    )
  }
  
  export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)