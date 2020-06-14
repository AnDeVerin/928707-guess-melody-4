import React from 'react';
import PropTypes from 'prop-types';

const WelcomeScreen = ({ errorCount, onStartHandler }) => {
  return (
    <section className="welcome">
      <div className="welcome__logo">
        <img
          src="img/melody-logo.png"
          alt="Угадай мелодию"
          width="186"
          height="83"
        />
      </div>

      <button className="welcome__button" onClick={onStartHandler}>
        <span className="visually-hidden">Начать игру</span>
      </button>

      <h2 className="welcome__rules-title">Правила игры</h2>

      <p className="welcome__text">Правила просты:</p>

      <ul className="welcome__rules-list">
        <li>Нужно ответить на все вопросы.</li>
        <li>Можно допустить {errorCount} ошибки.</li>
      </ul>

      <p className="welcome__text">Удачи!</p>
    </section>
  );
};

WelcomeScreen.propTypes = {
  errorCount: PropTypes.number,
  onStartHandler: PropTypes.func.isRequired,
};

WelcomeScreen.defaultProps = {
  errorCount: 3,
};

export default WelcomeScreen;
