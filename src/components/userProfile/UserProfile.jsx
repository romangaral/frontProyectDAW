import React from 'react';
import MyInformation from './MyInformation';
import MyComments from './MyCommentsCard';
import '../../styles/userProfile.css';

function UserProfile({ credentials}) {

  return (
    <div className="userProfileComponent container-fluid">
      <div className="row">
        <div className="col-md-6"><MyInformation credentials={credentials}/></div>
        <div className="col-md-6"><MyComments credentials={credentials}/></div>
      </div>
    </div >
  );
}

export default UserProfile;
