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
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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
            This is the sessionform.jsx login portion
          <br />
            {this.renderErrors()}
            <div className="login-form">
              <br />
              <label>Username:
              <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />
              </label>
              <br />
              <label>Password:
              <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
              <br />
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>
      );
    }

    if (this.props.formType === 'logout'){
      return (
        <div className="logout-form-container">
          <h2 className="greeting-name">Hello, {this.props.currentUser}!</h2>
          <br />
          <button className="logout-button" onClick={this.props.processForm}>Log Out</button>
        </div>
      )
    }

    if (this.props.formType === 'signup') {
      return (
        <div className="signup-form-container">
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            This is the sessionform.jsx sign up portion
            <br />
            {this.renderErrors()}
            <div className="signup-form">
              <br />
              <label>Username:
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="signup-input"
                />
              </label>
              <br />
              <label>Email:
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="signup-input"
                />
              </label>
              <br />
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="signup-input"
                />
              </label>
              <br />
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>
      )
    }
  }
}

export default SessionForm;