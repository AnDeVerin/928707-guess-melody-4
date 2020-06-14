import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = ({ errorCount }) => {
  const onStartHandler = () => {};
  return (
    <WelcomeScreen errorCount={errorCount} onStartHandler={onStartHandler} />
  );
};

App.propTypes = {
  errorCount: PropTypes.number,
};

App.defaultProps = {
  errorCount: 3,
};

export default App;
