import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.processForm({
      username: 'username',
      password: 'password'
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    if (this.props.formType === 'login'){
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {/* This is the sessionform.jsx login portion */}
            {this.renderErrors()}
            <input className="demo-user-button splash-button" type="submit" onClick={this.handleDemo} value='Demo User Log In' />
            <div className="login-form">
              <label>
              <input type="text"
                  value={this.state.username}
                  placeholder='username'
                  onChange={this.update('username')}
                  className="login-input"
                />
              </label>
              <br />
              <label>
              <input type="password"
                  value={this.state.password}
                  placeholder='password'
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
              <br />
              <input className="session-submit splash-button" type="submit" value='Log In' />
            </div>
          </form>
        </div>
      );
    }

    let currentUsername = '';

    if (this.props.currentUser){
      currentUsername = this.props.currentUser.username
    }

    if (this.props.formType === 'navBar'){
      return (
        <div className="nav-bar-container">
          <h2 className="greeting-name">Hello, {currentUsername}! This is the sessionform.jsx, navBar section</h2>
          <br />
          <button className="splash-button logout-button" onClick={this.props.processForm}>Log Out</button>
        </div>
      )
    }

    if (this.props.formType === 'signup') {
      return (
        <div className="signup-form-container">
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            {/* This is the sessionform.jsx sign up portion */}
            {this.renderErrors()}
            <div className="signup-form">
              <br />
              <label>
                <input type="text"
                  value={this.state.username}
                  placeholder='username'
                  onChange={this.update('username')}
                  className="signup-input"
                />
              </label>
              <br />
              <label>
                <input type="text"
                  value={this.state.email}
                  placeholder='e-mail'
                  onChange={this.update('email')}
                  className="signup-input"
                />
              </label>
              <br />
              <label>
                <input type="password"
                  value={this.state.password}
                  placeholder='password'
                  onChange={this.update('password')}
                  className="signup-input"
                />
              </label>
              <br />
              <input className="session-submit splash-button" type="submit" value='Sign Up' />
            </div>
          </form>
        </div>
      )
    }
  }
}

export default SessionForm;