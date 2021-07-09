import React from 'react';
import Data from '../components/Data';
import { user } from '../components/UserForTesting';

function Profile() {
    return (
      <>
        <Data {...user} />
      </>
    );
  }
  
  export default Profile;
