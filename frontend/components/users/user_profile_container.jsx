import { connect } from "react-redux";
import React from "react";
import UserProfile from "./user_profile";
import { fetchPosts } from '../../actions/post_actions';
import { fetchUser } from "../../actions/user_actions";

const selectPosts = (posts) => {
  return Object.keys(posts).reverse().map(id => posts[id]);
};

const mapStateToProps = (state, ownProps) => {
  // const sessionId =  state.session.id;
  const currentUser =  state.entities.users[state.session.id];
  const userId = parseInt(ownProps.match.params.userId);
  const user = state.entities.users[userId];
  const posts = selectPosts(state.entities.posts);
  // debugger;
  // const profilePicture =  state.entities.users[state.session.id].photoURL;
  return { currentUser, userId, user, posts };
};

const mapDispatchToProps = dispatch => {
  return {
    // clearErrors: () => dispatch(clearSessionErrors())
    fetchPosts: () => dispatch(fetchPosts()),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
