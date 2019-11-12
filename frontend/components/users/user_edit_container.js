import { connect } from "react-redux";
import UserEdit from "./user_edit";
import { fetchUser, updateUser } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const userId = parseInt(ownProps.match.params.userId);
  const user = state.entities.users[userId];
  const sessionId = state.session.id;
  const errors = state.errors.sessionErrors;
  return { currentUser, userId, user, errors, sessionId };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  updateUser: user => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEdit);