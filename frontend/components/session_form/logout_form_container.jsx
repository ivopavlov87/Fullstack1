import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors, users }) => {
  return {
    errors: errors.session,
    currentUser: 'placeholder-name',
    formType: 'logout'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);