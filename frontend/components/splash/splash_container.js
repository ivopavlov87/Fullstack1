import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = ({ session, entities: { users }}) => {
  console.log('this is the log:');
  console.log('users console log:');
  console.log(users);
  console.log('session console-log:');
  console.log(session);
  // console.log(entities.[session.id].username);
  // console.log(users.username);
  // debugger;
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
