import React from 'react';
import UserInfo from '../component/UserInfo';
import HeatComponent from '../component/HeatComponent';
import About from '../component/About';
import SocialHandle from '../component/SocialHandler';
import Edu from '../component/Educationalandsecurity';
import Security from '../component/PasswordSecurity';
import Interest from '../component/Interest';
const Profilepage = () => {
  return (
    <div className='jss8'>
      <main className='jss14 main-container'>
        <div className='jss13 contents-top'></div>
        <div classnmae='pf-container' id='pf-container'>
          <UserInfo />
          <div className='pf-dashboard'>
            <div className='jss28'>
              <main className='jss34'>
                <div className='jss33'></div>
                <div className='mp-container'>
                  <About />
                  <div className='mp-underline'></div>
                  <HeatComponent />
                  <div className='mp-underline'></div>
                  <SocialHandle />
                  <div className='mp-underline'></div>
                  <Edu />
                  <div className='mp-underline'></div>
                  <Security />
                  <div className='mp-underline'></div>
                  <Interest />
                </div>
              </main>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profilepage;
