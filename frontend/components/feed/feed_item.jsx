import React from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);

    this.postAuthor = "";
  }



  
  componentDidMount(){
    // console.log("function", this.props.testThing(this.props.post.user_id))
    this.props.postAuthor(this.props.post.user_id).then(res => this.postAuthor = res.user)
  }

  render() {

    let profilePic;
    if (this.postAuthor.photoURL) {
      profilePic = <img className="user-profile-top-picture" src={this.postAuthor.photoURL} />
    } else {
      profilePic = <img className="user-profile-top-picture" src={window.default_profile_pic} />
    }

    

    return (
      <div className="post-container">
        <Link to={`/users/${this.props.post.user_id}`}>
          <div>{profilePic}</div>
          {this.postAuthor.username} posted this picture
        </Link>
        {this.props.post.caption}
        <img
          className="test-image"
          src={this.props.post.photoURL}
          onClick={() =>
            this.props.history.push(`/posts/${this.props.post.id}`)
          }
          alt={this.props.post.caption}
        />
      </div>
    );
  }
}

export default withRouter(FeedItem);
