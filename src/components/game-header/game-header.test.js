import React from 'react';
import renderer from 'react-test-renderer';
import GameHeader from './game-header.jsx';

describe('GameHeader component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<GameHeader mistakes={3} />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
