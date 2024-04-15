// App.js

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import NextScreen from './components/NextScreen';
import { loginReducer } from './components/reducers';

const store = configureStore({
  reducer: {
    login: loginReducer
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/next-screen" element={<NextScreen />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
