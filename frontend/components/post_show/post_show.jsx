import React from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postAuthor: "",
    }

  }


  
  componentDidMount() {
    this.props.fetchPost(this.props.postId).then(res => {
     return (
      this.props.fetchUser(res.post.user_id).then(res => {
        return (this.setState({postAuthor: res.user}))
      }))
    })
  }

  render() {

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
        <Link to={`/users/${this.state.postAuthor.id}`}>
          <div className="feed-post-head">
            {profilePic}
            {this.state.postAuthor.username}
          </div>
        </Link>
        <div className="feed-post-pic-container">
          <img className="test-image" src={postPicture} />
        </div>
          {postCaption}
        </div>
    ); }
  }
};

export default withRouter(PostShow);