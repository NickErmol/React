import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

  // let contacts;

  if(!props.profile){
    return <Preloader/>
  } 
  // else {
  //   contacts = props.profile.contacts.map(c => (<span>{c}</span>));
  // }

  return (
    <div>
      <div>
        <img src='https://img.freepik.com/free-vector/ocean-sea-beach-nature-tranquil-landscape_33099-2248.jpg?size=626&ext=jpg&ga=GA1.2.1356500412.1617235200' />
      </div>
      <div className = {s.descriptionBlock}>
        <img src = {props.profile.photos.large} />
        <div> About me : {props.profile.aboutMe}</div>
        <div> Looking for a job : {props.profile.lookingForAJob ? 'true' : 'false'}</div>
        <div> Looking for a job description : {props.profile.lookingForAJobDescription}</div>
        <div> Full name : {props.profile.fullName}</div>
        <div> Contacts :</div>
        {/* <img
          className={s.avatarImage}
          src='https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0'
        /> */}
      </div>
    </div>
  );
};

export default ProfileInfo;
