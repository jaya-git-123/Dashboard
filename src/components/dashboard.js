import React, { useState } from 'react';
import fb from '../Assets/icon-facebook.svg';
import uparrow from '../Assets/icon-up.svg';
import tw from '../Assets/icon-twitter.svg';
import insta from '../Assets/icon-instagram.svg';
import youtube from '../Assets/icon-youtube.svg';
import downarrow from '../Assets/icon-down.svg';

const SocialMediaDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
        setDarkMode(!darkMode)
      }

  return (
    <div className={`dashboard ${darkMode ? 'dark' : 'light'}`}>
      <header className="dashboard-header">
        <div>
          <h1>Social Media Dashboard</h1>
          <p className='p'>Total Followers: 23,004</p>
        </div>
        <div className="dark-mode-toggle">
          <label htmlFor="darkModeSwitch">Dark Mode
          </label>
          <label className='switch'>
          <input type="checkbox" id="darkModeSwitch" checked={darkMode} onChange={toggleTheme} />
          <span className="slider"></span>
          </label>
    
        </div>
      </header>

      <div className="social-stats">
        <div className="stat-card facebook">
            <div className='fb-st'>
        <img src={fb} alt='Facebook' width={25} height={25} />
          <h3>@nathanf</h3>
          </div>
          <p className="followers">1987</p>
          <p className="follower">FOLLOWERS</p>
          <div className='arrow-st'>
          <img src ={uparrow} alt='uparrow' width={10} height={10} />
          <p className="change">12 Today</p>
          </div>
        </div>
        <div className="stat-card twitter">
        <div className='fb-st'>
        <img src={tw} alt='twitter' width={25} height={25} />
          <h3>@nathanf</h3>
          </div>
          <p className="followers">1044</p>
          <p className="follower">FOLLOWERS</p>
          <div className='arrow-st'>
          <img src ={uparrow} alt='uparrow' width={10} height={10} />
          <p className="change">99 Today</p>
          </div>
        </div>
        <div className="stat-card instagram">
        <div className='fb-st'>
        <img src={insta} alt='Facebook' width={25} height={25} />
          <h3>@nathanf</h3>
          </div>
          <p className="followers">11k</p>
          <p className="follower">FOLLOWERS</p>
          <div className='arrow-st'>
          <img src ={uparrow} alt='uparrow' width={10} height={10} />
          <p className="change">1099 Today</p>
          </div>
        </div>
        <div className="stat-card youtube">
        <div className='fb-st'>
        <img src={youtube} alt='Facebook' width={25} height={25} />
          <h3>@nathanf</h3>
          </div>
          <p className="followers">8239</p>
          <p className="follower">SUBSCRIBERS</p>
          <div className='arrow-st'>
          <img src ={downarrow} alt='downarrow' width={10} height={10} />
          <p className="change">144 Today</p>
          </div>
        </div>
      </div>

      <div className="overview">
        <h2>Overview - Today</h2>
        <div className="overview-stats">
          <div className="overview-item">
            <div className='tdy'>
            <p>Page Views</p>
            <img src ={fb} alt='facebook' width={25} height={25} />
            </div>
            <div className='tdy-2'>
            <p className="number">87</p>
            <p className="percentage"> <img src ={uparrow} alt='uparrow' width={10} height={10} /> 3%</p>
            </div>
          </div>
          <div className="overview-item">
          <div className='tdy'>
            <p>Likes</p>
            <img src ={fb} alt='facebook' width={25} height={25} />
            </div>
            <div className='tdy-2'>
            <p className="number">52</p>
            <p className="percentage"> <img src ={downarrow} alt='downarrow' width={10} height={10} /> 2%</p>
            </div>
          </div>
          <div className="overview-item">
          <div className='tdy'>
            <p>Likes</p>
            <img src ={insta} alt='instagram' width={25} height={25} />
            </div>
            <div className='tdy-2'>
            <p className="number">5462</p>
            <p className="percentage"> <img src ={uparrow} alt='uparrow' width={10} height={10} /> 2257%</p>
            </div>
          </div>
          <div className="overview-item">
          <div className='tdy'>
            <p>Profile Views</p>
            <img src ={insta} alt='instagram' width={25} height={25} />
            </div>
            <div className='tdy-2'>
            <p className="number">52k</p>
            <p className="percentage"> <img src ={uparrow} alt='uparrow' width={10} height={10} /> 3%</p>
            </div>
          </div>
          <div className="overview-item">
          <div className='tdy'>
            <p>Retweets</p>
            <img src ={tw} alt='twitter' width={25} height={25} />
            </div>
            <div className='tdy-2'>
            <p className="number">117</p>
            <p className="percentage"> <img src ={uparrow} alt='uparrow' width={10} height={10} /> 303%</p>
            </div>
          </div>
          <div className="overview-item">
          <div className='tdy'>
            <p>Likes</p>
            <img src ={tw} alt='twitter' width={25} height={25} />
            </div>
            <div className='tdy-2'>
            <p className="number">507</p>
            <p className="percentage"> <img src ={uparrow} alt='uparrow' width={10} height={10} /> 553%</p>
            </div>
          </div>
          <div className="overview-item">
          <div className='tdy'>
            <p>Likes</p>
            <img src ={youtube} alt='youtube' width={25} height={25} />
            </div>
            <div className='tdy-2'>
            <p className="number">107</p>
            <p className="percentage"> <img src ={downarrow} alt='downarrow' width={10} height={10} /> 19%</p>
            </div>
          </div>
          <div className="overview-item">
          <div className='tdy'>
            <p>Total Views</p>
            <img src ={youtube} alt='youtube' width={25} height={25} />
            </div>
            <div className='tdy-2'>
            <p className="number">1407</p>
            <p className="percentage"> <img src ={downarrow} alt='downarrow' width={10} height={10} /> 12%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaDashboard;