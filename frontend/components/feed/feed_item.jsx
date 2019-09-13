import React from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post-container">
        <Link to={`/users/${this.props.post.user_id}`}>
          See the profile of the user for this image
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
