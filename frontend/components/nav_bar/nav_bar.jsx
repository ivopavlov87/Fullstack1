import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => {
      this.props.history.push("/");
    });
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  renderErrors() {
    return (
      <ul className='errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }



  render() {

    let currentUsername = '';

    if (this.props.currentUser){
      currentUsername = this.props.currentUser.username;
    }

    let profilePic;
    if (this.props.profilePicture) {
      profilePic = (
        <img
          className="nav-bar-profile-pic"
          src={this.props.profilePicture}
          alt="placeholder-pic"
        />
      );
    } else {
      profilePic = (
        <img
          className="nav-bar-profile-pic"
          src={window.default_profile_pic}
          alt="placeholder-pic"
        />
      );
    }

    if (this.props.formType === 'navBar'){
      return (
        <div className="nav-bar">
          <Link to="/">
            <p className="pictogram-name-text-nav-bar">Picto-gram</p>
          </Link>
          <div className="nav-bar-search">
            <input type="text" placeholder="Search" />
          </div>
          <div className="nav-bar-buttons">
            <div>
              <Link to="#">
                <img className="nav-bar-profile-pic" src={window.upload_pic} />
              </Link>
            </div>
            &nbsp;
            <div>
              <Link to="#">{profilePic}</Link>
            </div>
            &nbsp;
            <input
              type="submit"
              id="logout-btn"
              className="splash-button logout-button"
              onClick={this.props.processForm}
              value="Log Out"
            />
          </div>
        </div>
      );
    }
  }
}

export default NavBar;