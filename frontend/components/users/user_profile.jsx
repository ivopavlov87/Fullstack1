import React from "react";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    let currentUsername = "";

    if (this.props.currentUser) {
      currentUsername = this.props.currentUser.username;
    }

    return (
      <div className="user-profile">
        <div className="user-profile-top">
          <div>
            <img className="user-profile-top-picture" src={window.happy_max} />
          </div>
          <div className="user-profile-top-card">
            <div className="row row1">
              <div>{currentUsername}</div>
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
              <div># of posts</div>
              <div># of followers</div>
              <div># of followed accounts</div>
            </div>
            <div className="row row3">
              <div>{currentUsername} - User full name here?</div>
              <br />
              <div>{this.props.currentUser.bio}</div>
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

export default UserProfile;
