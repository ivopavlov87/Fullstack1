import React from 'react';
import { Link } from 'react-router-dom';

import SignUpFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';



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
    const formType = (this.state.formType === 'signup') ? <SignUpFormContainer /> : <LoginFormContainer />;
    
 
    return (
      <div className="splash-on-site">
        <div className="landing-container">
          <div className="landing-image-column">
            {/* <img
              src={window.landing_gif}
              className="landing-image"
              alt="landing gif"
            /> */}
            <video
              autoPlay
              loop
              className="landing-image"
              src={window.landing_mov}
              poster={window.landing_img}
              alt="landing image"
            />
          </div>
          <div className="form-column">
            <Link to="/">
              <h2 className="pictogram-name-text">Picto-gram</h2>
            </Link>
            <h3 className="splash-text">{splashText}</h3>
            <input
              className="splash-button form-type-button"
              type='submit'
              onClick={this.handleClick}
              value={otherFormBtn}
            />
            {formType}
            By signing up, or logging in, you acknowledge that this is demo
            for learning purposes only.
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
