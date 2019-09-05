import React from 'react';

import SignUpFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';
import NavBarContainer from '../session_form/nav_bar_container';



class Splash extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      formType: "signup",
      formText: 'Sign up to see photos from your friends!'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    e.preventDefault();
    const newFormType = this.state.formType === 'signup' ? 'login' : 'signup';
    const newFormText = this.state.formType === 'signup' ? 'Log in to see photos from your friends!' : 'Sign up to see photos from your friends!';
    this.setState({
      formType: newFormType,
      formText: newFormText
    })
  }

  render() {

    const splashText = this.state.formText;
    const otherFormBtn = (this.state.formType === 'signup') ? 'Log In Instead' : 'Sign Up Instead';
    const formType = this.props.currentUser ? <NavBarContainer /> : (this.state.formType === 'signup') ? <SignUpFormContainer /> : <LoginFormContainer />;
    
    if (!this.props.currentUser){
      return (
        <div className='splash-on-site'>
          <div className='landing-container'>
            <div className='landing-image-column'>
              {/* <img className='landing-image' src="/assets/landing_image.png" alt="landing image" /> */}
              <video autoPlay loop className='landing-image' src="/assets/landing_mov.mov" 
                poster="/assets/landing_image.png" alt="landing image" />
            </div>
            <div className='form-column'>
              <h2 className='pictogram-name-text'>Pictogram</h2>
              <h3 className='splash-text'>{splashText}</h3>
              <button className='splash-button form-type-button' onClick={this.handleClick}>{otherFormBtn}</button>
              {formType}
              By signing up, or logging in, you acknowledge that this is demo for learning purposes only.
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='nav-bar'>
          {/* This text is inside the splash.jsx! (this will be gone) */}
          {formType}
        </div>
      )
    }
  }
}

export default Splash;
