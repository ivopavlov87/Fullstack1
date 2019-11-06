import React from "react";
import { withRouter } from "react-router";
import UserProfileItem from './user_profile_item';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.userId)
    this.props.fetchPosts();
  }

  componentDidUpdate(previousProps){
    if (previousProps.match.params.userId !== this.props.match.params.userId){
      this.props.fetchUser(this.props.userId)
    };
  }

  render() {

    if (!this.props.user){
      return (
        <div className="user-profile">loading...</div>
      )
    }

    let profilePic;
    if (this.props.user.photoURL){
      profilePic = <img className="user-profile-top-picture" src={this.props.user.photoURL} />
    } else {
      profilePic = <img className="user-profile-top-picture" src={window.default_profile_pic} />
    }

    let filteredPosts;
    let user = this.props.user;
    let userPosts;
    if(!this.props.posts){
      userPosts = <div className="user-profile">loading posts...</div>;
    } else {

      filteredPosts = this.props.posts.filter(post => post.user_id === user.id)

      userPosts =
        <ul className="user-profile-posts">
          {filteredPosts.map(post => (
            <li className="post-index-list" key={post.id}>
              <UserProfileItem post={post} />
            </li>
          ))}
        </ul>
    }

    let postCount = filteredPosts ? filteredPosts.length : 0;

    return (
      <div className="user-profile">
        <div className="user-profile-top">
          <div>{profilePic}</div>
          <div className="user-profile-top-card">
            <div className="row row1">
              <div>{this.props.user.username}</div>
              <div>
                <button>Edit Profile</button>
              </div>
              <div>
                <button>
                  <i className="fa fa-gear"></i>
                </button>
              </div>
            </div>
            <div className="row row2">
              <div>{postCount} posts</div>&nbsp;|&nbsp;
              <div># of followers</div>&nbsp;|&nbsp;
              <div># of followed accounts</div>
            </div>
            <div className="row row3">
              <div>About {this.props.user.username}:</div>
              <br />
              <div>{this.props.user.bio}</div>
            </div>
          </div>
        </div>
        <div className="user-page">
          <div>User pictures!</div>
          <div className="user-pictures">
            {userPosts}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserProfile);
