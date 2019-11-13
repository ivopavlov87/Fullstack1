import React from "react";
import { withRouter } from "react-router";
import FeedItem from "./feed_item";

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();

  }

  render() {

    let feedPosts;
    if (!this.props.posts) {
      feedPosts = <div className="user-profile">loading posts...</div>;
    } else {

      feedPosts = (
        <ul className="user-profile-posts">
          {this.props.posts.map(post => (
            <li className="post-index-list" key={post.id}>
              <FeedItem post={post} postAuthor={this.props.fetchUser} deletePost={this.props.deletePost} currentUser={this.props.currentUser}/>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div className="user-profile">
        <div className="user-page">
          <div>Feed pictures!</div>
          <div className="user-pictures">
            {feedPosts}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Feed);
