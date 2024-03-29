import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER = "UPDATE_USER";

const receiveUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
}); 

export const fetchUsers = () => dispatch => {
  return UserAPIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)));
};

export const fetchUser = (id) => dispatch => {
  return UserAPIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)));
}

// export const createUser = (formData) => dispatch => {
//   return UserAPIUtil.createUser(formData).then(user => dispatch(updateUser(user)));
// }

export const updateUser = (user) => (dispatch) => {
  return UserAPIUtil.editUser(user).then(
    user => dispatch(receiveUser(user)));
    // , err => dispatch(receiveErrors(err.responseJSON)));
};

export const updateUserPicture = (id, data) => (dispatch) => {
  return UserAPIUtil.updateUserPicture(id, data).then((user) => dispatch(receiveUser(user)));
};
