import {addPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { compose } from "redux";
import { getProfilePosts, getProfileNewPostText } from "../../../redux/profileSelectors";

let mapStateToProps = (state) => {
  return {
    posts : getProfilePosts(state),
    newPostText : getProfileNewPostText(state)
  };
};

export default compose(
  connect(mapStateToProps, {addPost})
)(MyPosts);
