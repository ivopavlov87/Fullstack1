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
    this.prettyDemoUser = this.prettyDemoUser.bind(this);

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

  componentWillUnmount(){
    this.props.clearErrors();
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

  async prettyDemoUser(e) {
    e.preventDefault();

    const demoUser = {
      username: 'DemoUser',
      password: 'password'
    };

    const sleep = ms => new Promise(res => setTimeout(res, ms));

    document.getElementById('username-input').focus();
    for (let i = 1; i <= demoUser.username.length; i++) {
      this.setState({ username: demoUser.username.substr(0, i) });
      await sleep(250);
    }

    await sleep(250);

    document.getElementById('password-input').focus();
    for (let i = 1; i <= demoUser.password.length; i++) {
      this.setState({ password: demoUser.password.substr(0, i) });
      await sleep(250);
    }

    await sleep(500);

    document.getElementById('session-submit-btn').click();

    await sleep(5000);
    document.getElementById('logout-btn').click();
  }


  render() {

    if (this.props.formType === 'login'){
      return (
        <div className="session-form-container">
          <form onSubmit={this.handleSubmit} className="session-form login-form-box">
            <div className="login-form">
              <label>
              <input type="text"
                  id='username-input'
                  value={this.state.username}
                  placeholder='username'
                  onChange={this.update('username')}
                  className="login-input"
                />
              </label>
              <br />
              <label>
              <input type="password"
                  id='password-input'
                  value={this.state.password}
                  placeholder='password'
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
              <br />
              <input id='session-submit-btn' className="session-submit splash-button" type="submit" value='Log In' />
              <input className="demo-user-button splash-button" type="submit" onClick={this.prettyDemoUser} value='Demo User Log In' />
            </div>
            <div>
              {this.renderErrors()}
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
        <div className="nav-bar-container session-form">
          <h2 className="greeting-name">Hello, {currentUsername}! This is the sessionform.jsx, navBar section</h2>
          <br />
          <button id='logout-btn' className="splash-button logout-button" onClick={this.props.processForm}>Log Out</button>
        </div>
      )
    }

    if (this.props.formType === 'signup') {
      return (
        <div className="session-form">
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            <div className="signup-form">
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
              <div>
                {this.renderErrors()}
              </div>
            </div>
          </form>
        </div>
      )
    }
  }
}

export default SessionForm;