import React from "react";
import { withRouter } from "react-router";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount(){
    // debugger;
    this.props.fetchUser(this.props.userId)
    // debugger;
  }

  componentDidUpdate(previousProps){
    if (previousProps.match.params.userId !== this.props.match.params.userId){
      this.props.fetchUser(this.props.userId)
    }
  }

  // componentWillUnmount() {
  //   this.props.clearErrors();
  // }

  // renderErrors() {
  //   return (
  //     <ul className="errors">
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {

    // console.log("props:")
    // console.log(this.props)

    // if (!this.props.user) {
    //   this.props.fetchUser(this.props.userId);
    // }

    if (!this.props.user){
      return (
        <div className="user-profile">loading...</div>
      )
    }

    // if (!this.props.post) {
    //   this.props.fetchPost(this.props.postId);
    // }


    // let profilePic = <img className="user-profile-top-picture" src={window.default_profile_pic} />;
    let profilePic;
    if (this.props.user.photoURL){
      profilePic = <img className="user-profile-top-picture" src={this.props.user.photoURL} />
    } else {
      profilePic = <img className="user-profile-top-picture" src={window.default_profile_pic} />
    }

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
              <div># of posts</div>&nbsp;|&nbsp;
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
            <img className="test-image" src={window.happy_max} alt="yup" />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserProfile);
