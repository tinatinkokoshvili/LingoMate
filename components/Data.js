import React from 'react';
import { Link } from 'react-router-dom';

function Bio({
    ethnicity,
    nationality,
    interests,
  }) {
    return (
      <>
        <div className='container'>
            <div className='ethnicity'>
                <h1 className='ethinicity-title'> 
                    Ethnicity
                </h1>
                <p className='ethnicity description'>
                    {ethnicity}
                </p>
            </div>
            <div className='nationality'>
                <h1 className='nationality-title'> 
                    Nationality
                </h1>
                <p className='nationality description'>
                    {nationality}
                </p>
            </div>
            <div className='interests'>
                <h1 className='interests-title'> 
                    Interests
                </h1>
                <p className='interests description'>
                    {interests}
                </p>
            </div>
        </div>
      </>
    );
  }
  
  export default Bio;



