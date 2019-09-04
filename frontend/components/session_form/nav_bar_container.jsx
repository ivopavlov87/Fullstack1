import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import SessionForm from './session_form';

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);