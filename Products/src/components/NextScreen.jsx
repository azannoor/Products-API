

import { useSelector } from 'react-redux';

const NextScreen = () => {
  const { user } = useSelector((state) => state.login);

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      
    </div>
  );
};

export default NextScreen;
