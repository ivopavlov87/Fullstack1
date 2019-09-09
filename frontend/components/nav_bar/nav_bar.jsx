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
      currentUsername = this.props.currentUser.username
    }

    if (this.props.formType === 'navBar'){
      return (
        <div className="nav-bar">
          <Link to="/">
            <p className="pictogram-name-text-nav-bar">Picto-gram</p>
          </Link>
          <div>
            <img
              className="nav-bar-profile-pic"
              src={window.happy_max}
              alt="placeholder-pic"
            />
            {currentUsername}'s profile
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
      );
    }
  }
}

export default NavBar;