import React from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postAuthor: "",
    }

    this.handleDelete = this.handleDelete.bind(this);

  }


  
  componentDidMount() {
    this.props.fetchPost(this.props.postId).then(res => {
     return (
      this.props.fetchUser(res.post.user_id).then(res => {
        return (this.setState({postAuthor: res.user}))
      }))
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
          {postCaption}
        </div>
    ); }
  }
};

export default withRouter(PostShow);