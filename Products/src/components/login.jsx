
import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from './actions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {user, error } = useSelector((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest(email, password));
  };

  if (user) {
    navigate('/next-screen');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit" >Log In</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
