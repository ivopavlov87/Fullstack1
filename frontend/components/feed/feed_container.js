import { connect } from "react-redux";
import React from "react";
import Feed from "./feed";
import { fetchPost, fetchPosts, deletePost } from "../../actions/post_actions";
import { fetchUser } from "../../actions/user_actions";
import { fetchPostComments, createComment, deleteComment, clearErrors } from '../../actions/comment_actions';

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
    fetchPost: (id) => dispatch(fetchPosts(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    deletePost: (id) => dispatch(deletePost(id)),
    fetchPostComments: postId => dispatch(fetchPostComments(postId)),
    deleteComment: id => dispatch(deleteComment(id)),
    createComment: comment => dispatch(createComment(comment)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
