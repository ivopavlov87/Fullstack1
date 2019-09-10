import * as PostAPIUtil from '../util/post_api_utils';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

const removePost = (postId) => ({
  type: REMOVE_POST,
  postId
});

export const fetchPosts = () => (dispatch) => {
  return PostAPIUtil.fetchPosts().then((posts) => dispatch(receivePosts(posts)));
};

export const fetchPost = (id) => (dispatch) => {
  return PostAPIUtil.fetchPost(id).then((post) => dispatch(receivePost(post)));
};

export const createPost = (post) => (dispatch) => {
  return PostAPIUtil.createPost(post).then((post) => dispatch(receivePost(post)));
};

export const updatePost = (post) => (dispatch) => {
  return PostAPIUtil.updatePost(post).then((post) => dispatch(recievePost(post)))
};

export const deletePost = (id) => (dispatch) => {
  return PostApiUtil.deletePost(id).then((post) => dispatch(removePost(id)));
};