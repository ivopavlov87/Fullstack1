import { connect } from "react-redux";
import React from "react";
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions'

const mapStateToProps = state => {
  return ({
  currentUser: state.entities.users[state.session.id],
  sessionId: state.session.id,
  errors: state.errors.post,
  });
};

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);