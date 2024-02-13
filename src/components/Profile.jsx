import React from "react";
import './Profile.css';

const Profile = () => {
  return (
    <div className='content'>
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
        <div className="posts" >
          <div className="item" >
            post1
          </div>
          <div className="item" >
            post2
          </div>
          <div className="item" >
            post3
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;