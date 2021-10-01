import React from 'react';
import Data from '../../components/Data';
import LanguageBox from '../../components/LanguageBox';
import { user, languagesinfo } from '../../components/UserForTesting';
import { Link, useHistory } from 'react-router-dom';

import '../../style/Profile.css';


function Profile() {
  
    return (
        <div className='profile-page'>
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
                        <div className="edit-profile-button">
                            <Link to='/form' className='edit-profile'>Edit Profile</Link>
                        </div>
                    </div>
                    <div className='view-messages'>
                        <Link to='/chat' className='chat-button'>View Messages</Link>
                    </div>
                </div>
            </div>

                <div className='user-data'>
                    <Data {...user} />
                    <LanguageBox {...languagesinfo} />
                </div>

        </div>
    );
  }
  
  export default Profile;
