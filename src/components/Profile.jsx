import React from "react";
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
          alt="Error"/>
      </div>
      <div>
        ava
      </div>
      <div>
        My posts
        <div>
          new post
        </div>
        <div className={s.posts} >
          <div className={s.item} >
            post1
          </div>
          <div className={s.item} >
            post2
          </div>
          <div className={s.item} >
            post3
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;