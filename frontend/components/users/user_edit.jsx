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
      photoURL: this.props.currentUser.photoURL,
      profilePictureFile: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);

  }

  componentDidMount(){
    this.props.fetchUser(this.props.currentUser.id)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleFile(e) {
    let currentUser = this.state.user
    const file = e.currentTarget.files[0];

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ profilePictureFile: file, photoURL: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }

    this.setState({ profilePictureFile: file }, () => {
      const formData = new FormData();
      formData.append('user[profile_picture]', this.state.profilePictureFile);
      this.props.updateUserPicture(this.props.currentUser.id, formData)

      this.setState({ profilePictureFile: null });
    });
  }

  handleSubmit(){
    let currentUser = this.state.user;

    currentUser.email = this.state.email;
    currentUser.bio = this.state.bio;
    this.props.updateUser(currentUser);
    setTimeout(() => this.props.history.push(`/users/${currentUser.id}/`), 500);
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

    // console.log("props", this.props);
    // console.log("state", this.state);

    let profilePic;
    if (this.state.user.photoURL) {
      profilePic = <img className="user-edit-picture" src={this.state.photoURL} />
    } else {
      profilePic = <img className="user-edit-picture" src={window.default_profile_pic} />
    }

    return(
      <div className="user-edit-container">
        {profilePic}
        <input type="file" className="profile-photo-upload-input" onChange={this.handleFile} />
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
                value={this.state.bio || ""}
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