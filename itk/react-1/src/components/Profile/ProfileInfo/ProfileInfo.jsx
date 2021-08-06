import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = ({profile, status, updateStatus}) => {

  if(!profile){
    return <Preloader/>
  } 

  return (
    <div>
      <div className = {s.descriptionBlock}>
        <img src = {profile.photos.large} />
        <div> About me : {profile.aboutMe}</div>
        <div> Looking for a job : {profile.lookingForAJob ? 'true' : 'false'}</div>
        <div> Looking for a job description : {profile.lookingForAJobDescription}</div>
        <div> Full name : {profile.fullName}</div>
        <div> Contacts :</div>
       
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
