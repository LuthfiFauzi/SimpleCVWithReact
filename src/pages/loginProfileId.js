import React from 'react';
import { useParams } from 'react-router-dom';

const LoginProfileId = () => {
  const params = useParams();
  const { profileId } = params;
  return (
    <div>
      <h1>People Profile</h1>
      <div>
        <span>{`hello ${profileId}`}</span>
      </div>
    </div>
  );
};

export default LoginProfileId;
