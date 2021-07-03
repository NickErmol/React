import axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/userDefaultPhoto.png';

const Users = (props) => {

    const getUsers = () => {
        if(props.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(responce => {
                props.setUsers(responce.data.items)
            });
        }
    }
   
    return(
        <div>
            <button onClick = {getUsers}>addUsers</button>
            {
                props.users.map((u) => <div key = {u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className = {s.userPhoto} alt=""/>
                        </div>
                        <div>
                            {
                                u.followed 
                                ? <button onClick ={() => {props.unFollow(u.id)}} >Unfollow</button> 
                                : <button onClick = { () => {props.follow(u.id)}}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                    </div>)
            }
        </div>
    )
}

export default Users;