import { connect } from "react-redux";
import React from "react";
import UserProfile from "./user_profile";
import { withRouter } from "react-router";
import { clearSessionErrors } from "../../actions/session_actions";

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    sessionId: state.session.id,
    currentUser: state.entities.users[state.session.id],
    profilePicture: state.entities.users[state.session.id].photoURL
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearSessionErrors())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserProfile)
);
