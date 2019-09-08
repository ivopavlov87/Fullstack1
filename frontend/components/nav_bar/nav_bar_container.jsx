import { connect } from 'react-redux';
import React from 'react';
import { logout, clearSessionErrors } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.id],
    formType: 'navBar'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: () => dispatch(logout()),
    clearErrors: () => dispatch(clearSessionErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));