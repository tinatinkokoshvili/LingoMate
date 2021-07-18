import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Profile.css';



function Bio({
    bio,
    nationality,
    interests,
  }) {
    // let url = 'https://api.printful.com/countries';

    // fetch(url)
    // .then(res => res.json())
    // .then((out) => {
    //     var jsonObject = JSON.parse(out);
    //     //loop through the array and get code of the object
    //     //which has name {nationality}
    // })
    // .catch(err => { throw err });



    return (
      <>
        <div className='about-me'>
       <div className="aboutme-title">
            <h1>About Me</h1>
        </div>

        <div className='aboutme-content'>
        <table className='aboutme-table'>
         <tr className='bio-row'>

            <th className='bio-title' style={{textAlign: 'left', fontWeight: 'bold', }}>Bio</th>
            <td className='bio-content'>{bio}</td>
         </tr>
         <tr className='nationality-row'>
            <th className='nationality-title' style={{textAlign: 'left', fontWeight: 'bold',}}>Nationality</th>
            <td className='nationality-content'>
                <img src="https://www.countryflags.io/sn/flat/64.png" className='nationality-flag'></img>
                <p>{nationality}</p>
            </td>
         </tr>
         <tr className='interests-row'>
            <th className='interests-title' style={{textAlign: 'left', fontWeight: 'bold', }}>Interests</th>
            <td className='interests-content'>{interests}</td>
        </tr>
      </table>
        </div>
       </div>
        
      </>
    );
  }
  
  export default Bio;



