import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Profile.css';

function Bio({
    bio,
    nationality,
    interests,
  }) {
    let url = 'https://api.printful.com/countries';

    fetch(url)
    .then(res => res.json())
    .then((out) => {
        var jsonObject = JSON.parse(out);
        //loop through the array and get code of the object
        //which has name {nationality}
    })
    .catch(err => { throw err });



    return (
      <>
      <div className="about-me">
        <div className="about-me-title">
            <h1>About Me</h1>
        </div>
        <div className='bio-container'>
                <div className='bio'>
                    <h1 className='bio-title'> 
                        Bio
                    </h1>
                    <p className='bio-description'>
                        {bio}
                    </p>
                </div>
                <div className='nationality'>
                    <h1 className='nationality-title'> 
                        Nationality
                    </h1>
                    <p className='nationality-description'>
                        {nationality}
                    </p>
                </div>
                <div className='interests'>
                    <h1 className='interests-title'> 
                        Interests
                    </h1>
                    <p className='interests-description'>
                        {interests}
                    </p>
                </div>
            </div>
      </div>
        
      </>
    );
  }
  
  export default Bio;



