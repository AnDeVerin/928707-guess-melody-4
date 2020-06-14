import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

describe('WelcomeScreen component', () => {
  it('renders correctly', () => {
    const emptyHandler = () => {};

    const component = renderer
      .create(<WelcomeScreen errorCount={3} onStartHandler={emptyHandler} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
