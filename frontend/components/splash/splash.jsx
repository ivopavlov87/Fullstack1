import React from 'react';

import SignUpFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';
import LogoutFormContainer from '../session_form/logout_form_container';



class Splash extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      formType: "signup",
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    e.preventDefault();
    const newFormType = this.state.formType === 'signup' ? 'login' : 'signup';
    this.setState({
      formType: newFormType
    })
  }

  render() {

    const otherFormBtn = (this.state.formType === 'signup') ? 'Log In Instead' : 'Sign Up Instead';
    const formType = this.props.currentUser ? <LogoutFormContainer /> : (this.state.formType === 'signup') ? <SignUpFormContainer /> : <LoginFormContainer />;

    // console.log("trying to find username:")
    // console.log(this.props.currentUser.username);
    
    if (!this.props.currentUser){
      return (
        <div>
          This text is inside the splash.jsx
          <br />
          <button onClick={this.handleClick}>{otherFormBtn}</button>
          {formType}
        </div>
      )
    } else {
      return (
        <div>
          This text is inside the splash.jsx!
          <br />
            <br />
          {formType}
        </div>
      )
    }
  }
}

export default Splash;
