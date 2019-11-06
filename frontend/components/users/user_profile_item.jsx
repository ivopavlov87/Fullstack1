import React from 'react';
import { withRouter } from 'react-router';

class UserProfileItem extends React.Component {
  constructor(props){
    super(props)

  }

  render(){

    let profilePic;
    if (this.props.userPic) {
      profilePic = <img className="user-profile-feed-picture" src={this.props.userPic} />
    } else {
      profilePic = <img className="user-profile-feed-picture" src={window.default_profile_pic} />
    }

    return (
      <div className="post-container">
        <div className="feed-post-head">
          {profilePic}
          {this.props.user}
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
        {this.props.post.caption}
      </div>
    );
  }

}

export default withRouter(UserProfileItem);