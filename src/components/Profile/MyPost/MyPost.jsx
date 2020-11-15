import React from 'react';
import x from './MyPost.module.css'
import Post from './Post/Post';

const MyPost = () => {
return(
    <div>
      <div className={x.item}>
        my post
            </div>
      <div className={x.item}>
        new post
            </div>
      <Post message = 'xxx' count='4'/>
      <Post message = 'sss' count='5'/>
      <Post count='5'/>
  </div>  )
  
}
export default MyPost;