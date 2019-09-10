import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  REMOVE_POST
} from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type){
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      newState = { [action.post.id]: action.post };
      return Object.assign({}, state, newState);
    case REMOVE_POST:
      newState = Object.assign({}, state);
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};

export default postsReducer;