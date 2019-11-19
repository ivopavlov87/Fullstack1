import React from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postAuthor: "",
      comments: "",
      commentBody: ""
    }

    // for deleting posts
    this.handleDelete = this.handleDelete.bind(this);

    // for adding comments
    this.handleComment = this.handleComment.bind(this)

  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  matchCommentsToPost(comment){
    comment.post_id === this.props.postId
  }

  handleComment(e) {
    e.preventDefault();
    const comment = { body: this.state.commentBody, post_id: this.props.postId, user_id: this.props.currentUser.id };
    this.props.createComment(comment)
      .then(() => { this.props.fetchPost(this.props.post.id) })
    this.setState({ commentBody: '' });
  }

  
  componentDidMount() {
    
    this.props.fetchPost(this.props.postId).then(res => {
      return (
        this.props.fetchUser(res.post.user_id).then(res => {
          return (this.setState({postAuthor: res.user}))
        }))
      })
      
      this.props.fetchPostComments(this.props.postId).then(res => {
        this.setState({comments: Object.values(res.comments)})
      })
  }

  handleDelete(){
    this.props.deletePost(this.props.postId);
    this.props.history.push('/feed')
  }

  render() {

    let deleteOption = ""
    if (this.state.postAuthor.id === this.props.currentUser.id) {
      deleteOption = <div>
        <button
          className="delete-post-btn"
          onClick={this.handleDelete}
          type="button"
          value={"otherFormBtn"}>
        X
        </button>
      </div>
    }

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

    let postPicture;
    let postCaption;
    if (!this.props.post){
      postPicture = window.happy_max;
      postCaption = "loading..."
      return (
        <div className="post-container">
          <img className="test-image" src={postPicture} />
          <div>{postCaption}</div>
        </div>
      );
    } else {

      let profilePic;
      if (this.state.postAuthor.photoURL) {
        profilePic = <img className="user-profile-feed-picture" src={this.state.postAuthor.photoURL} />
      } else {
        profilePic = <img className="user-profile-feed-picture" src={window.default_profile_pic} />
      }

    postPicture = this.props.post.photoURL;
    postCaption = this.props.post.caption;

      return (
        <div className="post-show-container">
          <div className="post-show-col1">
            <div className="post-top">
              <Link to={`/users/${this.state.postAuthor.id}`}>
                <div className="feed-post-head">
                  {profilePic}
                  {this.state.postAuthor.username}
                </div>
              </Link>
              {deleteOption}
            </div>
            
            <div className="feed-post-pic-container">
              <img className="test-image" src={postPicture} />
            </div>
            {this.state.postAuthor.username}:&nbsp;{postCaption} <br />
          </div>
          <div className="post-show-col2">
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
        </div>
      )
    }
  }
};

export default withRouter(PostShow);