import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GameType } from '../../const.js';

import GameHeader from '../game-header/game-header.jsx';
import { getMistakes } from '../../reducer/game/selectors.js';

const GameScreen = (props) => {
  const { type, children, mistakes } = props;

  return (
    <section className={`game game--${type}`}>
      <GameHeader mistakes={mistakes} />

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
};

const mapStateToProps = (state) => ({
  mistakes: getMistakes(state),
});

export { GameScreen };
export default connect(mapStateToProps)(GameScreen);
