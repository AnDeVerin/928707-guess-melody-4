import React from 'react';
import renderer from 'react-test-renderer';
import GameHeader from './game-header.jsx';

describe('GameHeader component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<GameHeader />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
