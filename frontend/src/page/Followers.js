import React from 'react';
import { Follower } from '../component/Follower';
const Followers = () => {
  return (
    <div className='vw-container'>
      <div className='vw-category-rows'>
        <div className='vw-category-header'>
          <div className='vw-category-title'>users following you</div>
        </div>
        <div className='infinite-scroll-component__outerdiv'>
          <div
            className='infinite-scroll-component fw-category-videos'
            style={{ height: 'auto', overflow: 'auto' }}
          ></div>
        </div>
        <div className='ndp-cont'>
          <h1 className='ndp-text'>No One Following You</h1>
        </div>
      </div>
    </div>
    // <Follower />
  );
};

export default Followers;
