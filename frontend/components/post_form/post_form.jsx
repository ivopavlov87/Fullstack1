import React from "react";
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router";

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      caption: "",
      photoFile: null,
      photoURL: null,
      user_id: this.props.sessionId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoURL: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleChange (field) {
    return e => {
      this.setState({ [field]: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("post[caption]", this.state.caption);
    if (this.state.photoFile) {
      formData.append("post[photo]", this.state.photoFile);
    }
    formData.append("post[user_id]", this.state.user_id);
    
    this.props.createPost(formData).then((action) => {
      // debugger;  
        this.setState({ caption: "", photoUrl: null });
        this.props.history.push(`/posts/${action.post.id}`);
      }
    );
  }

  //   renderErrors() {
  //   return (
  //     <ul className='errors'>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {

    // console.log(this.props)
    // console.log(this.state)

    if (this.props.currentUser) {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="file" className="post-photo-upload-input" onChange={this.handleFile} />
          <br />
          <br />
          <input type="text" maxLength="500" placeholder="Add a caption" onChange={this.handleChange("caption")} />
          <br />
          <br />
          <input type="submit" className="post-submit-input" value="upload" />
          {/* <div>
              {this.renderErrors()}
          </div> */}
        </form>
      );
    } else {
      return (
        <Redirect to="/" />
      )
    }
  }


}

export default withRouter(PostForm);