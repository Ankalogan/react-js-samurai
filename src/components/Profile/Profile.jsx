import React from 'react';
import x from './Profile.module.css'
import MyPost from './MyPost/MyPost';

const Profile = () =>
 {
    return <div className= {x.content}>
    <img src='https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
    <div className={x.item}>
      ava+opisanie
    </div>
    <MyPost />
  </div>
 }

 export default Profile;
