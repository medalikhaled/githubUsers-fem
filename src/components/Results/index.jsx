import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar';
import UserInfoCard from '../UserInfoCard';
import './results.module.css';

const Results = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(Object);

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  const getUserData = async () => {
    // eslint-disable-next-line no-undef
    const response = await fetch(`https://api.github.com/users/${username}`);
    const jsonData = await response.json();

    if (jsonData && jsonData.message !== 'Not Found') {
      setUserData(jsonData);
      // console.log(jsonData);
    } else if (username !== '') {
      // console.log('Username does not exist');
    } else {
      setUserData({});
    }
  };

  return (
    <div>
      <SearchBar username={username} setUsername={setUsername} />
      <UserInfoCard userData={userData} />
    </div>
  );
};

export default Results;
