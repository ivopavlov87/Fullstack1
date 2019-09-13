import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
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

    if (this.props.currentUser) {
      return (
        <div className="nav-bar">
          <Link to="/feed">
            <p className="pictogram-name-text-nav-bar">Picto-gram</p>
          </Link>
          <div className="nav-bar-search">
            <input type="text" placeholder="Search" />
          </div>
          <div className="nav-bar-buttons">
            <div>
              <Link to="/posts/new">
                <img className="nav-bar-upload-pic" src={window.upload_pic} />
              </Link>
            </div>
            &nbsp;
            <div>
              <Link to={`/users/${this.props.currentUser.id}`} >
                <img className="nav-bar-profile-pic" src={window.blank_user} />
              </Link>
            </div>
            &nbsp;
            <img
              id="logout-btn"
              onClick={this.props.logout}
              className="splash-button logout-button"
              src={window.logout_icon}
              alt="logout"
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default NavBar;