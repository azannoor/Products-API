
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

const initialState = {

  user: null,
  error: null,
};

const users = [
  { email: 'azan@gmail.com', password: 'password1', username: 'azan' },
  { email: 'haider@gmail.com', password: 'password2', username: 'haider' },

];

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      const { email, password } = action.payload;
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        return { ...state, user };
      } else {
        return { ...state, error: 'Invalid email or password' };
      }
    }
    case LOGIN_SUCCESS: {
      return { ...state, user: action.payload };
    }
    case LOGIN_FAILURE: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
