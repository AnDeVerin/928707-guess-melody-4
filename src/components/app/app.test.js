import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

describe('App component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<App errorCount={3} />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
