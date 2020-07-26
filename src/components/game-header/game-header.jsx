import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../const.js';
import Mistakes from '../mistakes/mistakes.jsx';

const GameHeader = ({ mistakes, goToWelcome }) => {
  return (
    <header className="game__header">
      <Link className="game__back" to={AppRoute.ROOT} onClick={goToWelcome}>
        <span className="visually-hidden">Сыграть ещё раз</span>
        <img
          className="game__logo"
          src="img/melody-logo-ginger.png"
          alt="Угадай мелодию"
        />
      </Link>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="timer"
        viewBox="0 0 780 780"
      >
        <circle
          className="timer__line"
          cx="390"
          cy="390"
          r="370"
          style={{
            filter: 'url(#blur)',
            transform: 'rotate(-90deg) scaleY(-1)',
            transformOrigin: 'center',
          }}
        />
      </svg>

      <Mistakes count={mistakes} />
    </header>
  );
};

GameHeader.propTypes = {
  mistakes: PropTypes.number.isRequired,
  goToWelcome: PropTypes.func.isRequired,
};

export default GameHeader;
