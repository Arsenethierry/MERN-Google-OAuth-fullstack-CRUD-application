import React from 'react';

function Profile({user}) {
    return (
        <div>
            <h1>Current user : {user.results.name}</h1>
        </div>
    );
}

export default Profile;