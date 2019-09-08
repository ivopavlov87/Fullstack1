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
        <h2 className="user-greeting-bs">
          Hello, {currentUsername}! This is the user profile container!
          <br />
          {this.props.currentUser.bio}
        </h2>
      </div>
    );

  }
}

export default UserProfile;
