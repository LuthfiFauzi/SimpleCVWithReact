import React, { useEffect, useState } from 'react';
import { userService } from '../services';
import { getCookie } from '../utils/cookie';

const LoginProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userDataLoading, setUserDataLoading] = useState(false);

  const userId = JSON.parse(getCookie('userData')).id;

  useEffect(() => {
    setUserDataLoading(true);
    userService
      .getUserById(userId)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
      })
      .catch((err) => {
        return console.log(err);
      })
      .finally(() => {
        setUserDataLoading(false);
      });
  }, [userId]);

  return (
    <div className="content">
      <h1> My Profile!</h1>
      {userDataLoading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <p>{`name : ${name}`}</p>
          <p>{`email : ${email}`}</p>
        </div>
      )}
    </div>
  );
};

export default LoginProfile;