// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  const [like, setLike] = useState(props.obj.likes);
  console.log(props);
  
  const [isLiked, setIsLiked] = useState(false);

  const increaseLikes = () => {
    setIsLiked(!isLiked)
  if (isLiked === true) {
    setLike(like -1);
  } else {
    setLike(like +1);
  }
}
  // set up state for the likes

  return (
    <div className="post-border">
      <PostHeader
        username={props.obj.username}
        thumbnailUrl={
          props.obj.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.obj.imageUrl}
        />
      </div>
      <LikeSection increaseLikes = {increaseLikes} like={like} />
      <CommentSection
        postId={props.obj.imageUrl}
        comments={props.obj.comments}
      />
    </div>
  );
};

export default Post;