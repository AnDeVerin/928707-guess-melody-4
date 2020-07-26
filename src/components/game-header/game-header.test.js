import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import history from '../../history.js';
import GameHeader from './game-header.jsx';

describe('GameHeader component', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Router history={history}>
          {' '}
          <GameHeader mistakes={3} goToWelcome={() => {}} />
        </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
