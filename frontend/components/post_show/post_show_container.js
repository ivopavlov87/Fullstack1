import { connect } from "react-redux";
import { fetchPost, deletePost } from "../../actions/post_actions";
import { fetchPostComments, createComment, deleteComment, clearErrors } from '../../actions/comment_actions';
import { fetchUser } from "../../actions/user_actions";
import PostShow from "./post_show";

const mapStateToProps = (state, ownProps) => {
  const postId = parseInt(ownProps.match.params.postId);
  const post = state.entities.posts[postId];
  const currentUser = state.entities.users[state.session.id];
  return { postId, post, currentUser };
};

const mapDispatchToProps = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id)),
  fetchUser: (id) => dispatch(fetchUser(id)),
  deletePost: id => dispatch(deletePost(id)),
  fetchPostComments: postId => dispatch(fetchPostComments(postId)),
  deleteComment: id => dispatch(deleteComment(id)),
  createComment: comment => dispatch(createComment(comment)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
