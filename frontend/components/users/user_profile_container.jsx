import { connect } from "react-redux";
import React from "react";
import UserProfile from "./user_profile";
import { withRouter } from "react-router";
import { clearSessionErrors } from "../../actions/session_actions";

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.id],
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
