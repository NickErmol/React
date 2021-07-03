const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
  users: [
  //   { id: "1", photoUrl :"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png", followed: true, fullName: "Nick", status:"I am a developer", location: {city: "Belarus", country: "Minsk"} },
  //   { id: "2", photoUrl :"https://banner2.cleanpng.com/20180625/req/kisspng-computer-icons-avatar-business-computer-software-user-avatar-5b3097fcae25c3.3909949015299112927133.jpg", followed: false, fullName: "Andrei", status:"I am a developer", location: {city: "Russia", country: "Moscow"} },
  //   { id: "3", photoUrl :"https://banner2.cleanpng.com/20180529/eot/kisspng-computer-icons-clip-art-profile-avatar-5b0de499bbdc67.8725542215276371457695.jpg", followed: true, fullName: "Alina", status:"I am a developer", location: {city: "Belarus", country: "Minsk"} },
  //   { id: "4", photoUrl :"https://img.favpng.com/8/13/6/avatar-computer-icons-png-favpng-zapkeKu3xzjy6HwSaFu87UfGQ.jpg", followed: false, fullName: "Sveta", status:"I am a developer", location: {city: "Ukraine", country: "Kiev"} },
  //   { id: "5", photoUrl :"https://banner2.cleanpng.com/20180329/bhe/kisspng-computer-icons-avatar-user-profile-human-5abcd90dcf1548.0400521415223257738482.jpg", followed: true, fullName: "Vlad", status:"I am a developer", location: {city: "Belarus", country: "Minsk"} },
  //   { id: "6", photoUrl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNWA656CRe97bqFdSiLSLH-gp6tfGFKMURg&usqp=CAU", followed: false, fullName: "Denis", status:"I am a developer", location: {city: "Belarus", country: "Minsk"} },
   ],
  newPostText: "",
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
  case FOLLOW: 
    return {
      ...state,
      users: state.users.map((u)=> {
        if (u.id === action.userId) {
          return {...u, followed: true};
        }
       return u;
      })
    }
  case UNFOLLOW: 
  return {
    ...state,
    users: state.users.map((u)=> {
      if (u.id === action.userId) {
        return {...u, followed: false};
      }
     return u;
    })
  }
  case SET_USERS:
    return {...state, users: [...state.users, ...action.users]}
    default:
      return state;
  }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;