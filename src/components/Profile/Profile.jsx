import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.profile} >
      <div>
        <img
          src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
          alt="Error"/>
      </div>
      <div className={s.ava} >
        ava
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;