import { connect } from "react-redux";
import React from "react";
import Feed from "./feed";
import { fetchPosts, deletePost } from "../../actions/post_actions";
import { fetchUser } from "../../actions/user_actions";

const selectPosts = posts => {
  return Object.keys(posts)
    .reverse()
    .map(id => posts[id]);
};

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const posts = selectPosts(state.entities.posts);
  return { currentUser, posts };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    deletePost: (id) => dispatch(deletePost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
