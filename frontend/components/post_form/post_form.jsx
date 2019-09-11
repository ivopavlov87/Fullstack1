  import React from "react";
import { withRouter } from "react-router";

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    
  }


  render() {
    return (
    <div>
      <form>
        <input type="text" placeholder = 'Add a caption' />
      </form>
    </div>
    );
  }


}

export default withRouter(PostForm)