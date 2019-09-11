import React from "react";
import { withRouter } from "react-router";

class PostShow extends React.Component {
  constructor(props) {
    super(props);

  }


  
  componentDidMount() {
     this.props.fetchPost(this.props.postId);
    //  console.log('the post:')
    //  console.log(post);

  }

  render() {

    if (!this.props.post) {
    this.props.fetchPost(this.props.postId);
    }

    let postPicture;
    let postCaption;
    if (!this.props.post){
      postPicture = window.happy_max;
      postCaption = "loading..."
      return (
        <div className="post-show-container">
          <img className="post-show-picture" src={postPicture} />
          <div className="post-caption">{postCaption}</div>
        </div>
      );
    }

    postPicture = this.props.post.photoURL;
    postCaption = this.props.post.caption;

    return (
      <div className="post-show-container">
        <img className="post-show-picture" src={postPicture} />
        <div className='post-caption'>{postCaption}</div>
      </div>
    );
  }
};

export default withRouter(PostShow);