import React from 'react';
import x from './Post.module.css'

const Post = (props) => {
  return (
    <div>
      <div className={x.item}>
        <img src = 'https://cdn.dribbble.com/users/458748/screenshots/2105346/onering4_dribbble.png' />
        {props.message}
            </div>
            <div>
              <span>like {props.count}</span>
            </div>
      

    </div>)

}
export default Post;