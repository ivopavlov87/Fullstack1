  import React from "react";
import { withRouter } from "react-router";

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    
  }


  render() {
    return (
    <div>
      this is inside the post form jsx say hi to {this.props.currentUser.username}
    </div>
    );
  }


}

export default withRouter(PostForm)