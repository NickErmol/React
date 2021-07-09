import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer';
import { withRouter } from 'react-router';
import { authAPI } from '../../API/api';

class ProfileContainer extends React.Component
{
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2;
        }
        authAPI.getUserData(userId)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(data => {
                                this.props.setUserProfile(data);
                              });
    }               

     render() {
        return (
            <div>
              <Profile {...this.props} profile = {this.props.profile}/>
            </div>
          );
     }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
