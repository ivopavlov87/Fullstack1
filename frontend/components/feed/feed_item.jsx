import React from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postAuthor: "",
      comments: "",
      commentBody: ""
    }

    // this deletes a post
    this.handleDelete = this.handleDelete.bind(this);

    // for adding comments
    this.handleComment = this.handleComment.bind(this)
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleComment(e) {
    e.preventDefault();
    const comment = { body: this.state.commentBody, post_id: this.props.postId, user_id: this.props.currentUser.id };
    this.props.createComment(comment)
      .then(() => { this.props.fetchPost(this.props.post.id) })
    this.setState({ commentBody: '' });
  }

  // this is for post deletion
  handleDelete() {
    this.props.deletePost(this.props.post.id);
  }

  componentDidMount() {
    this.props.postAuthor(this.props.post.user_id).then(res => {
      return (this.setState({ postAuthor: res.user }))
    })

    this.props.fetchPostComments(this.props.postId).then(res => {
      this.setState({ comments: Object.values(res.comments) })
    })
  }

  matchCommentsToPost(comment) {
    comment.post_id === this.props.postId
  }

  render() {

    let theComments = this.props.post && this.props.post.comments ?
      Object.values(this.props.post.comments).map(comment => {
        return <div key={comment.id / comment.user_id + comment.post_id} className="comment-show-container">
          <div className="comment-user-and-body-container">
            <Link className="comment-link" to={`/users/${comment.user_id}`}>
              <img className="comment-author-pic" src={comment.authorPic} />
              <div className="comment-user-and-body">
                {comment.author}:&nbsp;
              </div>
            </Link>{comment.body}
          </div>

          {comment.user_id === this.props.currentUser.id ? (
            <button className="delete-comment-button"
              onClick={() => this.props.deleteComment(comment.id)
                .then(() => { this.props.fetchPost(this.props.post.id) })}>
              X
            </button>) : (<div></div>)}
        </div>
      }) : <div></div>

    let deleteOption = ""
    if (this.state.postAuthor.id === this.props.currentUser.id) {
      deleteOption = <div>
        <button
          className="delete-post-btn"
          onClick={this.handleDelete}
          type="button"
          >
          X
        </button>
      </div>
    }

    let profilePic;
    if (this.state.postAuthor.photoURL) {
      profilePic = <img className="user-profile-feed-picture" src={this.state.postAuthor.photoURL} title={this.state.postAuthor.username} />
    } else {
      profilePic = <img className="user-profile-feed-picture" src={window.default_profile_pic} title={this.state.postAuthor.username} />
    }

    return (
      <div className="post-container">
        <div className="post-top">
        <Link to={`/users/${this.props.post.user_id}`}>
          <div className="feed-post-head">
            {profilePic}
            {this.state.postAuthor.username}
          </div>
        </Link>
        {deleteOption}
      </div>
        <div className="feed-post-pic-container">
        <img
          className="test-image"
          src={this.props.post.photoURL}
          onClick={() =>
            this.props.history.push(`/posts/${this.props.post.id}`)
          }
          alt={this.props.post.caption}
          />
        </div>
          {this.state.postAuthor.username}: {this.props.post.caption}
        <br />
        {theComments}
        <div className="comment-create-container">
          <form className="comment-create-form">
            <textarea
              className="comment-create-textarea"
              value={this.state.commentBody}
              onChange={this.update("commentBody")}
              placeholder="Add a comment...">
            </textarea>
            <button
              className="submit-comment-button"
              onClick={this.handleComment}>
              Post
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(FeedItem);
