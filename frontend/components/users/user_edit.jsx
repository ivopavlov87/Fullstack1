import React from 'react';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

class UserEdit extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      user: this.props.currentUser,
      username: this.props.currentUser.username,
      email: this.props.currentUser.email,
      bio: this.props.currentUser.bio,
      photoURL: this.props.currentUser.photoURL
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount(){
    this.props.fetchUser(this.props.currentUser.id)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(){
    let currentUser = this.state.user;

    currentUser.email = this.state.email;
    currentUser.bio = this.state.bio;
    this.props.updateUser(currentUser);
    // if (this.state.username) {
      setTimeout(() => this.props.history.push(`/users/${currentUser.id}/`), 500);
    // }
    // else {
    //   this.setState({ username: oldUsername });
    // }
  }

  // renderErrors() {
  //   return (
  //     <ul className='errors'>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {

    let profilePic;
    if (this.state.user.photoURL) {
      profilePic = <img className="user-edit-picture" src={this.state.user.photoURL} />
    } else {
      profilePic = <img className="user-edit-picture" src={window.default_profile_pic} />
    }

    return(
      <div className="user-edit-container">
        {profilePic}
        <div>Username: {this.props.currentUser.username}</div>
        <div>Email: {this.props.currentUser.email}</div>
        <div>Bio: {this.props.currentUser.bio}</div>
        <form onSubmit={this.handleSubmit} className="user-edit-form-box">
          <div className="user-edit-form">
            <label>
              Email:
              <input type="text"
                value={this.state.email}
                placeholder='Email'
                onChange={this.update('email')}
                className="signup-input"
              />
            </label>
            <br />
            <label>
              Bio:
              <input type="text"
                value={this.state.bio || "test"}
                placeholder='Bio'
                onChange={this.update('bio')}
                className="signup-input"
              />
            </label>
            <br />
            <input className="user-edit splash-button" type="submit" value='Submit Changes' />
            <div>
              {/* {this.renderErrors()} */}
            </div>
          </div>
        </form>
      </div>
    )
  };

}

export default withRouter(UserEdit);