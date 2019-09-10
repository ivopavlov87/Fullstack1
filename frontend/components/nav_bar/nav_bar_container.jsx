import { connect } from 'react-redux';
import React from 'react';
import { logout, clearSessionErrors } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  if (state.entities.users[state.session.id]){
    return {
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.id],
    profilePicture: state.entities.users[state.session.id].photoURL,
    };
  } else {
    return {
    errors: state.errors.session
    };
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearSessionErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));