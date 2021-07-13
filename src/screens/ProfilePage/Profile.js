import React from 'react';
import Data from '../../components/Data';
import { user } from '../../components/UserForTesting';

import '../../style/Profile.css';

// import { makeStyles } from '@material-ui/core/styles';
// import { styled } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';


function Profile() {
  
    return (
      <div id="profile">
      <div className='header-container'>
      <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"></link>
        </head>
        <div id="profile-head">
        <div id="pfp">
                <span class="material-icons-round" style={{fontSize: '144px', color: '#D9932B'}}>
                    account_circle
                </span>
            </div>
            <div id="item" >
                <div id="name"> Jane Doe </div>
                <div id="location" >
                    <span class="material-icons-outlined"  style={{fontSize: '18px'}}>
                        place
                    </span>
                    New York, USA
                </div>
                <div id="likes">
                    <span class="material-icons-outlined" style={{fontSize: '18px', color: 'red'}} >
                        favorite
                        </span>
                        23 likes
                </div>
            </div>
            <div class="edit-profile">
                <a href="">Edit Profile</a>
            </div>
        </div>
        <div className='view-messages'>
            <button className='chat-button'>View Messages</button>
                      
        </div>
        </div>
        
        <Data {...user} />
      

      </div>
    );
  }
  
  export default Profile;
