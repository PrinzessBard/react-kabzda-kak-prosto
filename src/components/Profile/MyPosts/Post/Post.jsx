import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://cdn.fishki.net/upload/post/2022/09/02/4254307/tn/1269e66360feb39692e55e0e288f231b.jpg"/>
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;