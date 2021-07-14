import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Profile.css';

import { makeStyles, styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


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
        {/* <div className="about-me">


        <table className='bio-container'>
            <tbody>
                <tr className='bio-row'>
                    <th scope='row' className='bio-title'>Bio</th>
                    <td className='bio-content'>
                        <span>{bio}</span>
                    </td>
                </tr>
            </tbody>
        </table>
        </div> */}
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




      {/* -------------------First Version------------------ */}
        {/* <div className="about-me">
        <div className="about-me-title">
            <h1>About Me</h1>
        </div>
        <div className='bio-container'>
                <div className='bio'>
                    <h1 className='bio-title'> 
                        Bio
                    </h1>
                    <p className='bio-content'>
                        {bio}
                    </p>
                </div>
                <div className='nationality'>
                    <h1 className='nationality-title'> 
                        Nationality
                    </h1>
                    <img src="https://www.countryflags.io/sn/flat/64.png" className='nationality-flag'></img>
                    <p className='nationality-content'>
                        {nationality}
                    </p>
                </div>
                <div className='interests'>
                    <h1 className='interests-title'> 
                        Interests
                    </h1>
                    <p className='interests-content'>
                        {interests}
                    </p>
                </div>
            </div>
      </div> */}




      {/* {/* <Grid className="about-me" container>
      <Grid item xs={12} sm={6}> */}
      {/* <div className='about-me'>
      <div className="about-me-title">
            <h1>About Me</h1>
        </div>
        <Typography>
        <div className='bio-container'>

            <div className='aboutme-titles'>
            <List dense='false'>
                <ListItem className='bio-title' align='left'>
                  <ListItemText 
                    primary={<h1 style={{ color: '#FF5678', fontSize: '25px', fontFamily: 'Hermeneus One', }}>Bio</h1>}
                  />
                </ListItem>
                <ListItem className='nationality-title' align='left'>
                  <ListItemText
                    primary={<h1 style={{ color: '#FF5678', fontSize: '25px', fontFamily: 'Hermeneus One' }}>Nationality</h1>} 
                  />
                </ListItem>
                <ListItem className='interests-title' align='left'>
                  <ListItemText
                    primary={<h1 style={{ color: '#FF5678', fontSize: '25px', fontFamily: 'Hermeneus One' }}>Interests</h1>} 
                  />
                </ListItem>
            </List>
            </div>


            {/* <div className='bio-title'>
                <h1> Bio </h1>
            </div>
            <div className='nationality-title'>
                <h1> Nationality </h1>
            </div>
            <div className='interests-title'>
                <h1> Interests </h1>
            </div> */}
            

            {/* <div className='aboutme-content'>
            <List dense='false'>
                <ListItem className='bio-content'>
                  <ListItemText 
                    primary={<h1 style={{ fontSize: '25px', fontFamily: 'Hermeneus One', marginTop: '-35px'}}>{bio}</h1>}
                  />
                </ListItem>
                <ListItem className='nationality-content'>
                  <ListItemText
                    primary={<h1 style={{ fontSize: '25px', fontFamily: 'Hermeneus One', }}>{nationality}</h1>}
                  />
                </ListItem>
                <ListItem className='interests-content'>
                  <ListItemText
                    primary={<h1 style={{ fontSize: '25px', fontFamily: 'Hermeneus One', }}>{interests}</h1>}
                  />
                </ListItem>
            </List>





            {/* <div className='bio-description'> 
            <p >
                {bio}
            </p>
            </div>
            <div className='nationality-description'> 
                <p >
                        {nationality}
                    </p>
            </div>
            <div className='interests-description'>
                <p>
                        {interests}
                </p>
            </div> */}
            {/* </div>



                

        </div>
        </Typography>

      </div> */}


      {/* </Grid>
 
      </Grid> */}
        
      </>
    );
  }
  
  export default Bio;



