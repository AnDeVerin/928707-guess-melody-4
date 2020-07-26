import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GameType } from '../../const.js';

import GameHeader from '../game-header/game-header.jsx';
import { getMistakes } from '../../reducer/game/selectors.js';
import { ActionCreator } from '../../reducer/game/game.js';

const GameScreen = (props) => {
  const { type, children, mistakes, goToWelcome } = props;

  return (
    <section className={`game game--${type}`}>
      <GameHeader mistakes={mistakes} goToWelcome={goToWelcome} />

      {children}
    </section>
  );
};

GameScreen.propTypes = {
  type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  mistakes: PropTypes.number.isRequired,
  goToWelcome: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  mistakes: getMistakes(state),
});

const mapDispatchToProps = (dispatch) => ({
  goToWelcome() {
    dispatch(ActionCreator.goToWelcome());
  },
});

export { GameScreen };
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
