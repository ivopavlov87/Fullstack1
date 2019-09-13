import React from 'react';
import { withRouter } from 'react-router';

class UserProfileItem extends React.Component {
  constructor(props){
    super(props)

  }

  render(){
    return(
      <div className="post-container">
        {this.props.post.caption}
        <img className="test-image" src={this.props.post.photoURL} alt={this.props.post.caption} />
      </div>
    )
  }

}

export default withRouter(UserProfileItem);