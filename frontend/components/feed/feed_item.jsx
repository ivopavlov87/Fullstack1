import React from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);

    this.postAuthor = "";
  }



  
  componentDidMount(){
    this.props.postAuthor(this.props.post.user_id).then(res => this.postAuthor = res.user)
  }

  render() {

    let profilePic;
    if (this.postAuthor.photoURL) {
      profilePic = <img className="user-profile-feed-picture" src={this.postAuthor.photoURL} title={this.postAuthor.username} />
    } else {
      profilePic = <img className="user-profile-feed-picture" src={window.default_profile_pic} title={this.postAuthor.username} />
    }

    return (
      <div className="post-container">
        <Link to={`/users/${this.props.post.user_id}`}>
          <div className="feed-post-head">
            {profilePic}
            {this.postAuthor.username}
          </div>
        </Link>
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
          {this.postAuthor.username}: {this.props.post.caption}
      </div>
    );
  }
}

export default withRouter(FeedItem);
